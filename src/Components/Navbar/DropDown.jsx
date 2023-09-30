import { useState } from "react"

const DropDown = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button onClick={()=>setOpen(!open)}>Categories</button>
      <div className ={ `${open? "block" : "hidden"} absolute`}>
      <h1>men</h1>
      <h1>women</h1>
      <h1>kids</h1>
      <h1>electronics</h1>
      </div>
    </div>
  )
}

export default DropDown
