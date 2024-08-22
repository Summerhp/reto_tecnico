import React from 'react';
import { Layout, Col, Row, Form, Input, List, Space } from 'antd';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined } from '@ant-design/icons';
import logo from '../../assets/svg/Logotipo-Macropay.svg';
import face from '../../assets/svg/Happy_face.svg';
import './footer.css';
const { Footer } = Layout;

const Footer2: React.FC = () => {
    return (
        <Footer className='footer'>
            <Row>
                <Col span={10}>
                    <h3>OFERTAS Y PROMOCIONES</h3>
                    <h1>¡No te pierdas nuestras ofertas!</h1>
                    <div className='div-form'>
                        <Form className='form' size='large' name="basic" labelCol={{ span: 10 }} wrapperCol={{ span: 16 }}  initialValues={{ remember: true }} autoComplete="off">
                            <Form.Item name="mail">
                                <Input placeholder="Tu dirección de correo electrónico" className="custom-input" addonAfter={<svg color='#004AC1' xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                                </svg>} />
                            </Form.Item>
                        </Form>
                    </div>
                    <Row className='row-list' justify="space-between">
                        <Col className='col-logo'>
                            <img src={logo} alt="MacroPay" />
                        </Col>
                        <Col>
                            <List>
                                <List.Item>Envios y devoluciones</List.Item>
                                <List.Item>Preguntas frecuentes</List.Item>
                            </List>
                        </Col>
                        <Col>
                            <List>
                                <List.Item>Aviso de privacidad</List.Item>
                                <List.Item>Términos y condiciones</List.Item>
                            </List>
                        </Col>
                    </Row>
                </Col>
                <Col span={4} className='col-smile'>
                    <img src={face} alt="MacroPay" className='img-smile' />
                </Col>
                <Col span={8} offset={2} className='col-rrss'>
                    <h1 className='h1-rrss'>¡Conversemos!</h1>
                    <p className='p-rrss'>Loren ipsum dolor sit amet</p>
                    <Space size="large">
                        <a href="#">
                            <FacebookOutlined className='rrss'/>
                        </a>
                        <a href="#">
                            <InstagramOutlined className='rrss'/>
                        </a>
                        <a href="#">
                            <LinkedinOutlined className='rrss'/>
                        </a>
                        <a href="#">
                            <WhatsAppOutlined className='rrss'/>
                        </a>
                    </Space>
                </Col>
            </Row>
        </Footer>
    );
};

export default Footer2;
