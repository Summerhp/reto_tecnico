import React from 'react';
import { Row, Col, Space } from 'antd';
import { CreditCardOutlined } from '@ant-design/icons';
import styles from './productInfo.module.css'
import { Product } from '../../types/product';

interface ProductInfoProps {
    product: Pick<Product, 'marca' | 'nombre' | 'precio' | 'reviews'>;
    renderStars: (reviews: number) => React.ReactNode;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product, renderStars }) => {
    return (
        <Col span={24}>
            <Row justify="space-between">
                <Col className={styles['col-name']}>
                    <h1 className={styles['h1-product']}>
                        {product.marca} {product.nombre}
                    </h1>
                    {renderStars(product.reviews)}
                </Col>
                <Col className={styles['col-price']} pull={1}>
                    <h1 className={styles['h1-price']}>
                        ${product.precio.toFixed(2)}
                    </h1>
                    <Space size="large">
                        {[...Array(4)].map((_, index) => (
                            <CreditCardOutlined className={styles['icon-card']} key={index} />
                        ))}
                    </Space>
                </Col>
            </Row>

            <br />

            <Row>
                <Col className={styles['col-p']}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius mi eu eleifend ornare.
                        Donec pretium lobortis massa eu euismod. Suspendisse ex felis, lacinia nec pretium eget, semper
                        et ipsum. Etiam ut libero tempus, euismod sem et, suscipit leo. Vestibulum nec libero massa.
                        Sed placerat porttitor nisi, ut ultricies mi. Vivamus nisi leo, pellentesque nec libero eu,
                        malesuada mattis metus.
                    </p>
                </Col>
            </Row>

            <Row className={styles['row-security']} justify="end" align="middle">
                <Row className={styles['row-container']} align={'middle'}>
                    <Col className={styles['col-icon']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-shield" viewBox="0 0 16 16">
                            <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                        </svg>
                    </Col>
                    <Col className={styles['col-text']}>
                        <h3>Compra segura con Macropay Protect</h3>
                        <p>Devolución gratis (30 días) / 12 meses de garantía de fábrica.</p>
                    </Col>
                </Row>
            </Row>
            <Row className={styles['row-text']} justify={'end'} align={'middle'}>
                <p>
                    La promoción vence en 24d 12h:43m
                </p>
            </Row>
        </Col>
    );
};

export default ProductInfo;
