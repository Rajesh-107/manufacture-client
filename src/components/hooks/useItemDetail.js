import { useState, useEffect } from 'react';

const useItemDetail = id => {
    const [products, setProducts] = useState({});

    useEffect(() => {
        const url = `https://localhost:5000/order/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [id]);
    return [products]
}
export default useItemDetail;