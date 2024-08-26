import React from 'react';
import { Col, Image, Button } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import styles from './productPhotos.module.css'

interface ProductGalleryProps {
    product: { imagen: string };
    isHeartFilled: boolean;
    changeHeart: () => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ product, isHeartFilled, changeHeart }) => {
    return (
        <>
            <Col className={styles['col-photos']} span={3} offset={1}>
                {[...Array(4)].map((_, index) => (
                    <Image className={styles['image-col']}  key={index} src={product.imagen} />
                ))}
            </Col>
            <Col span={6}>
                <div className={styles['div-photo']} >
                    <Image className={styles['image-div']}  src={product.imagen} />
                    <Button className={styles['button-heart']}  type="text" onClick={changeHeart}>
                        {isHeartFilled ? <HeartFilled /> : <HeartOutlined />}
                    </Button>
                    <div className={styles['div-discount']}  >
                        <p className={styles['p-discount']} >40%</p>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default ProductGallery;
