const URL = "http://localhost:5000";

export default {
  banners: () => fetch(`${URL}/banners`).then((res) => res.data),
  getCategories: () => fetch(`${URL}/categories`).then((res) => res.data),
  getProducts: () => fetch(`${URL}/products`).then((res) => res.data),
};
