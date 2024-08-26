import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import ProductModal from '../productModal';
import { renderStars } from '../../utils/renderStars';
import './antdCard.css';
import styles from './card.module.css';

interface ProductCardProps {
    product: {
        id: string;
        nombre: string;
        marca: string;
        precio: number;
        reviews: number;
        imagen: string;
        informacion: JSON;
    };
    toggleFavorite: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, toggleFavorite }) => {
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const changeHeart = () => {
        //Solicitud a la API para actualizar los favoritos
        setIsHeartFilled(!isHeartFilled);
        toggleFavorite(product.id);
    };

    return (
        <>
            <div className={styles['div-card']}>
                <Card className={styles.cardStyle} extra={<Button type="text" className='button-heart' onClick={() => changeHeart()}>{isHeartFilled ? <HeartFilled /> : <HeartOutlined />}</Button>} hoverable cover={
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