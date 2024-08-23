import React from 'react';
import { Row, Col, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './promotionBanner.css';

interface PromotionBannerProps {
    price: number;
}

const PromotionBanner: React.FC<PromotionBannerProps> = ({ price }) => {
    return (
        <>
            <Row className='row-icon' align="top">
                <Col span={5}>
                    <div className='div-icon'>
                        <Row align="middle" justify="center">
                            <Col span={10}>
                                <h1 className='h1-circle'>HOY</h1>
                            </Col>
                            <Col span={10} offset={3} pull={1}>
                                <p className='p-d'>DESDE</p>
                                <p className='p-price'>${price}</p>
                                <p className='p-week'>SEMANAL</p>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col span={18}>
                    <Row className='row-credit' justify="space-between">
                        {['¡Aplica a tu crédito!', 'Verifica tu compra', 'Disfruta tu celular'].map((text, index) => (
                            <Col key={index} span={7} className="col-container">
                                <div>
                                    <div className='div-step'>
                                        {index + 1}
                                    </div>
                                    <p className='p-text'>{text}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            <Row className='row-button' justify="end">
                <div className='div-button'>
                    <Button className='button-credit' type="primary">
                        LO QUIERO A CRÉDITO
                        <ArrowRightOutlined className='arrow'/>
                    </Button>
                </div>
            </Row>
        </>
    );
};

export default PromotionBanner;
