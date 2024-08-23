import React from 'react';
import { Layout, Menu, Button, Row, Col, MenuProps } from 'antd';
import logo from '../../assets/svg/Logotipo-Macropay.svg';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './navbar.css';

const { Header } = Layout;


const Navbar: React.FC = () => {
    const items: MenuProps['items'] = ['Home', 'Celulares', 'Motocicletas'].map((key) => ({
        key,
        label: `${key}`,
    }));
    return (
        <div className='navbar'>
            <Layout>
                <Row className='first-row'>
                    <Col span={2} offset={1}>
                        <div className='logo-div'>
                            <a className="navbar-brand" href="/">
                                <img src={logo} alt="MacroPay"></img>
                            </a>
                        </div>
                    </Col>
                    <Col span={4} offset={11} pull={4}>
                        <div className='icons'>
                            <Button type="primary" className='signup'>
                                Crea Tu Cuenta
                            </Button>
                            <Button type="text" className='login'>
                                Iniciar sesión
                            </Button>
                            <ShoppingCartOutlined className='cart' />
                        </div>
                    </Col>
                    <div className="credit-label">
                        <span>COMPRA A <br /> CRÉDITO</span>
                    </div>
                </Row>
            </Layout>
            <Layout>
                <Header className='second-row'>
                    <Menu className='menu' mode="horizontal" defaultSelectedKeys={['2']} items={items} />
                </Header>
            </Layout>
        </div>
    );
};

export default Navbar;