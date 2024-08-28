import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import ProductGrid from '../../components/productGrid';
import MenuTop from '../../components/breadcrum';
import './productDetail.css';
import data from '../../utils/data.json';
import ProductGallery from '../../components/productPhotos';
import ProductInfo from '../../components/productInfo';
import { renderStars } from '../../utils/renderStars';
import PromotionBanner from '../../components/promotionBanner';
import ProductDetailInfo from '../../components/productDetailPhoto';
import ProductSpecifications from '../../components/productSpecifications';
import CreditOffer from '../../components/productOffer';
import { Product } from '../../types/product';
import useFavorites from '../../hooks/useFavorites';

const ProductDetail: React.FC = () => {
    const { favorites, toggleFavorite } = useFavorites();
    const { id } = useParams<{ id: string }>();
    const allProducts: Product[] = data;
    const product = allProducts.find((prod) => prod.id === id);
    if (!product) {
        return <div>Producto no encontrado</div>;
    }
    const relatedProducts = allProducts.filter((prod) => prod.categoria === product.categoria && prod.id !== id).slice(0, 4);
    const isHeartFilled = Boolean(favorites && favorites[product.id]);
    return (
        <>
            <MenuTop marca={product.marca} nombre={product.nombre}></MenuTop>
            <Row>
                <ProductGallery product={{ id: product.id, imagen: product.imagen }} toggleFavorite={toggleFavorite} isHeartFilled={isHeartFilled}></ProductGallery>
                <Col span={14}>
                    <ProductInfo product={product} renderStars={(reviews) => renderStars({ rating: reviews })} />
                    <PromotionBanner price={(product.precio / 3)}></PromotionBanner>
                </Col >
            </Row >
            <Row>
                <Col offset={1}>
                    <h2>Información detallada del producto</h2>
                </Col>
            </Row>
            <Row>
                <ProductDetailInfo product={product}></ProductDetailInfo>
                <Col span={13}>
                    <ProductSpecifications product={product}></ProductSpecifications>
                    <CreditOffer></CreditOffer>
                </Col>
            </Row>
            <Row justify={'center'}>
                <h1>Productos Relacionados</h1>
            </Row>
            <Row justify={'center'}>
                <Col>
                    <ProductGrid products={relatedProducts} />
                </Col>
            </Row>
        </>
    )
};

export default ProductDetail;