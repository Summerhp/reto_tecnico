import React from 'react';
import ProductCard from '../productCard';
import { Row } from 'antd';

interface Product {
    id: string;
    nombre: string;
    marca: string;
    precio: number;
    reviews: number;
    imagen: string;
    informacion: any;
}

interface ProductGridProps {
    products: Product[];
    toggleFavorite: (id: string) => void;
}
const ProductGrid: React.FC<ProductGridProps> = ({ products, toggleFavorite }) => {
    return (
        <Row>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} toggleFavorite={toggleFavorite}/>
            ))}
        </Row>

    );
};

export default ProductGrid;
