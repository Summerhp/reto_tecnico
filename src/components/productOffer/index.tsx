import React from 'react';
import { Row, Col, Typography, List, Button, Slider } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import face from '../../assets/svg/Happy_face.svg';
import styles from './productOffer.module.css';

const { Title, Text } = Typography;

const CreditOffer: React.FC = () => {
    return (
        <Row className={styles.mainRow} align={'middle'}>
            <Col span={8} className={styles.colRq}>
                <Title level={3} className={styles.titleCredid}>
                    Lleva este celular a Crédito!
                </Title>
                <Text className={styles.subtitleCredit}>¿Qué necesitas?</Text>
                <List className={styles.listRq}
                    dataSource={[
                        'Tu cuenta de Facebook',
                        'Tu INE Vigente',
                        'Correo electrónico',
                    ]}
                    renderItem={(item) => 
                        <List.Item className={styles.itemRq}>
                            <CheckOutlined className={styles.checkItem} />
                            {item}
                        </List.Item>
                    }
                />
            </Col>
            <Col span={10} offset={4} className={styles.colEnganche}>
                <div className={styles.divContainer}>
                    <div className={styles.divInfo}>
                        <div className={styles.divFace}><img src={face} alt="MacroPay" style={{ width: '20%' }} /></div>
                        <Title level={4}>¿Te falta una lanita?</Title>
                        <Text className={styles.textEnganche}>ENGANCHE $520,00</Text>
                        <br />
                        <Text className={styles.textEnganche}>PAGO SEMANAL $125,00</Text>
                    </div>
                    <div className={styles.divSlider}>
                        <Slider className={styles.sliderEnganche} defaultValue={15}/>
                        <Text>Enganche</Text>
                    </div>
                    <Row>
                        <Button className={styles.buttonApply} type="primary" block>
                            Aplica ahora
                        </Button>
                    </Row>
                    <Text className={styles.textClarification} type="secondary">
                        *Hasta $2,000 de manera fácil, rápida y confiable
                    </Text>
                </div>
            </Col>
        </Row>
    );
};

export default CreditOffer;
