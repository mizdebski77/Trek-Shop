export const fetchProducts = () => (
    fetch("https://trek-shop-database.onrender.com/")
        .then((response: Response) => response.json())
);