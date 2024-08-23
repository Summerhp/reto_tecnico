import React from 'react';
import { Row, Col } from 'antd';

interface ProductDetailInfoProps {
  product: {
    imagen: string;
  };
}

const ProductDetailInfo: React.FC<ProductDetailInfoProps> = ({ product }) => {
  return (
    <>
      <Row>
        <Col span={10} offset={1}>
          <h2>Información detallada del producto</h2>
        </Col>
      </Row>
      <Row>
        <Col span={10} offset={1}>
          <Row gutter={[16, 16]}>
            {[1, 2, 3, 4].map((_, index) => (
              <Col key={index} span={12}>
                <div className="product-image-container">
                  <img src={product.imagen} alt={`Detalle ${index + 1}`} className="product-image" />
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetailInfo;
