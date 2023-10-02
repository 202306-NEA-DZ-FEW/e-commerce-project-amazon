export const fetchApi = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getProductById = async (productId) => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const data = await res.json();
  return data;
};
