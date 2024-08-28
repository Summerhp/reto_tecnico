import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import ProductGrid from '../productGrid';
import data from '../../utils/data.json'
import useFavorites from '../../hooks/useFavorites';
import { Product } from '../../types/product';

const ProductsOften: React.FC = () => {
    const { favorites, toggleFavorite } = useFavorites();
    const [oftenProducts, setOftenProducts] = useState<Product[]>([]);
    useEffect(() => {
        const allProducts = data;
        const selectedProducts = allProducts.sort(() => 0.5 - Math.random()).slice(0, 4);
        setOftenProducts(selectedProducts);
    }, []);

    return (
        <>
            <Row justify="center">
                <h1>Nuestros Productos Más Vendidos</h1>
            </Row>
            <Row justify="center">
                <Col>
                    <ProductGrid favorites={favorites} toggleFavorite={toggleFavorite} products={oftenProducts} />
                </Col>
            </Row>
        </>
    );
};

export default ProductsOften;
