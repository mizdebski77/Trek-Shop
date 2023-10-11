export const fetchProducts = () => (
    fetch("http://localhost:5000/")
        .then((response: Response) => response.json())
);