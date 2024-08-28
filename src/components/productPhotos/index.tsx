import React from 'react';
import { Col, Image } from 'antd';
import HeartButton from '../../utils/heartButton';
import styles from './productPhotos.module.css'

interface ProductGalleryProps {
    product: { id: string; imagen: string };
    isHeartFilled: boolean;
    toggleFavorite: (id: string) => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ product, isHeartFilled, toggleFavorite }) => {
    return (
        <>
            <Col className={styles['col-photos']} span={3} offset={1}>
                {[...Array(4)].map((_, index) => (
                    <Image className={styles['image-col']} key={index} src={product.imagen} />
                ))}
            </Col>
            <Col span={6}>
                <div className={styles['div-photo']} >
                    <Image className={styles['image-div']} src={product.imagen} />
                    <HeartButton id={product.id} isHeartFilled={isHeartFilled} toggleFavorite={toggleFavorite} variant="productPhotos"/>
                    <div className={styles['div-discount']}  >
                        <p className={styles['p-discount']} >40%</p>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default ProductGallery;
