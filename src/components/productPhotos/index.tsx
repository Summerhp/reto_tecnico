import React from 'react';
import { Col, Image, Button } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import './productPhotos.css'

interface ProductGalleryProps {
    product: { imagen: string };
    isHeartFilled: boolean;
    changeHeart: () => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ product, isHeartFilled, changeHeart }) => {
    return (
        <>
            <Col className='col-photos' span={3} offset={1}>
                {[...Array(4)].map((_, index) => (
                    <Image className='image-col' key={index} src={product.imagen} />
                ))}
            </Col>
            <Col span={6}>
                <div className='div-photo'>
                    <Image className='image-div' src={product.imagen} />
                    <Button className='button-heart' type="text" onClick={changeHeart}>
                        {isHeartFilled ? <HeartFilled /> : <HeartOutlined />}
                    </Button>
                    <div className='div-discount' >
                        <p className='p-discount'>40%</p>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default ProductGallery;
