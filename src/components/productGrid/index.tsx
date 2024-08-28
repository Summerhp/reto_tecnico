import React from 'react';
import ProductCard from '../productCard';
import { Row } from 'antd';
import { Product } from '../../types/product';

interface ProductGridProps {
    products: Product[];
    toggleFavorite: (id: string) => void;
    favorites: { [key: string]: boolean };
}
const ProductGrid: React.FC<ProductGridProps> = ({ products, toggleFavorite, favorites }) => {
    return (
        <Row>
            {products.map((product) => {
                const isHeartFilled = Boolean(favorites && favorites[product.id]);
                return (
                    <ProductCard key={product.id} product={product} toggleFavorite={toggleFavorite} isHeartFilled={isHeartFilled}/>
                );
            })}
        </Row>

    );
};

export default ProductGrid;
