import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import ProductGrid from '../productGrid';
import data from '../../utils/data.json'

const ProductsOften: React.FC = () => {
    const [oftenProducts, setOftenProducts] = useState<any[]>([]);
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
                    <ProductGrid products={oftenProducts} />
                </Col>
            </Row>
        </>
    );
};

export default ProductsOften;
