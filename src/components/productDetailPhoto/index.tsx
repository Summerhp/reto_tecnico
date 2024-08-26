import React from 'react';
import { Row, Col } from 'antd';
import styles from './productDetailPhoto.module.css';

interface ProductDetailInfoProps {
  product: {
    imagen: string;
  };
}

const ProductDetailInfo: React.FC<ProductDetailInfoProps> = ({ product }) => {
  return (
    <Col span={10} offset={1}>
      <Row gutter={[16, 16]}>
        {[1, 2, 3, 4].map((_, index) => (
          <Col key={index} span={12}>
            <div className={styles['product-image-container']}>
              <img src={product.imagen} alt={`Detalle ${index + 1}`} className={styles['product-image']} />
            </div>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default ProductDetailInfo;
