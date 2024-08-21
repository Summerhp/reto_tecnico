import React from 'react';
import { Layout, Menu, Button, Row, Col, MenuProps } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import logo from '../../assets/svg/Logotipo-Macropay.svg';
import './navbar.css';

const { Header } = Layout;


const Navbar: React.FC = () => {
    const items1: MenuProps['items'] = ['Home', 'Celulares', 'Motocicletas'].map((key) => ({
        key,
        label: `${key}`,
    }));
    return (
        <>
            <Layout>
                <Row className='first-row'>
                    <Col span={2} offset={1}>
                        <div className='logo'>
                            <a className="navbar-brand" href="/">
                                <img src={logo} alt="MacroPay"></img>
                            </a>
                        </div>
                    </Col>
                    <Col span={4} offset={11} pull={4}>
                        <div className='buttons'>
                            <Button type="primary" className='create-button'>
                                Crea Tu Cuenta
                            </Button>
                            <Button type="text" className='login-button'>
                                Iniciar sesión
                            </Button>
                            <ShoppingCartOutlined className='cart-button' />
                        </div>
                    </Col>
                    <div className="credit-label">
                        <span>COMPRA A <br /> CRÉDITO</span>
                    </div>
                </Row>
            </Layout>
            <Layout>
                <Header className='second-row'>
                    <Menu mode="horizontal" defaultSelectedKeys={['2']} items={items1} className='menu-style' />
                </Header>
            </Layout>

        </>
    );
};

export default Navbar;