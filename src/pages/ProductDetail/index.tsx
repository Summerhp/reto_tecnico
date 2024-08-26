import React, { useState } from 'react';
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

interface Product {
    id: string;
    nombre: string;
    marca: string;
    precio: number;
    reviews: number;
    categoria: string;
    imagen: string;
    informacion: {
        fabricante?: string;
        peso?: string;
        dimensiones?: string;
        pais_de_origen?: string;
        numero_de_modelo?: string;
        color?: string;
        material?: string;
        cantidad_de_piezas?: number;
        caracteristicas_especiales?: string;
        componentes_incluidos?: string;
        motor?: string;
        potencia?: string;
        transmision?: string;
    };
}

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    console.log(id)
    const allProducts: Product[] = data;
    const product = allProducts.find((prod) => prod.id === id);
    if (!product) {
        return <div>Producto no encontrado</div>;
    }
    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const changeHeart = () => {
        setIsHeartFilled(!isHeartFilled);
    }
    const relatedProducts = allProducts.filter((prod) => prod.categoria === product.categoria && prod.id !== id).slice(0, 4);
    return (
        <>
            <MenuTop marca={product.marca} nombre={product.nombre}></MenuTop>
            <Row>
                <ProductGallery  product={{id: product.id, imagen: product.imagen }} changeHeart={changeHeart} isHeartFilled={isHeartFilled}></ProductGallery>
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