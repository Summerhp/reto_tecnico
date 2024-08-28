import React from 'react';
import { Card, Row, Col } from 'antd';
import ProductModal from '../productModal';
import { renderStars } from '../../utils/renderStars';
import HeartButton from '../../utils/heartButton';
import './antdCard.css';
import styles from './card.module.css';
import { Product } from '../../types/product';

interface ProductCardProps {
    product: Product;
    toggleFavorite: (id: string) => void;
    isHeartFilled: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, toggleFavorite, isHeartFilled}) => {

    const changeHeart = () => {
        toggleFavorite(product.id);
    };

    return (
        <>
            <div className={styles['div-card']}>
                <Card className={styles.cardStyle} extra={<HeartButton id={product.id} isHeartFilled={isHeartFilled} toggleFavorite={changeHeart} variant="card" />} hoverable cover={
                    <a href={`/product/${product.id}`}>
                        <div>
                            <img className={styles['img-card']} src={product.imagen} alt={product.nombre} />
                            <div className={styles['div-discount']}>
                                <p className={styles['p-discount']}>40%</p>
                            </div>
                        </div>
                    </a>
                }>
                    <Row className={styles.cardBody}>
                        <Col span={12}>
                            <a className={styles['a-name']} href={`/product/${product.id}`}>
                                <h4>{product.marca} {product.nombre}</h4>
                            </a>
                            {renderStars({rating: product.reviews})}
                            <p className={styles['p-pricetime']}>$120 p/semana o $520 p/mes</p>
                        </Col>
                        <Col span={12} className={styles['col-price']}>
                            <h2 className={styles['h2-price']}>${product.precio.toFixed(2)}</h2>
                            <h3 className={styles['h3-oldprice']}>$99999</h3>
                            <ProductModal product={product} />
                        </Col>
                    </Row>
                </Card>
            </div>
        </>
    );
};


export default ProductCard;