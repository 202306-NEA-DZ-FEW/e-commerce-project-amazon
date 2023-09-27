import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [itemAmount, setItemAmount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  })

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])

  const addToCart = (id, product) => {
    const newItem = { ...product, amount: 1 }

    //check if item is already in cart
    const cartItem = cart.find(item => {
      return item.id === id
    })

    //if cartItem is already in cart
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  const removeFromCart = id => {
    const newCart = cart.filter(item => {
      return item.id !== id
    })
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const increaseAmount = id => {
    const cartItem = cart.find(item => item.id === id)
    addToCart(id, cartItem)
  }

  const decreaseAmount = id => {
    const cartItem = cart.find(item => item.id === id)
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (cartItem.amount < 2) {
      removeFromCart(id)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider