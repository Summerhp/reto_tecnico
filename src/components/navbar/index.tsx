import React from 'react';
import { Layout, Menu, Button, Row, Col, MenuProps } from 'antd';
import logo from '../../assets/svg/Logotipo-Macropay.svg';
import { ShoppingCartOutlined } from '@ant-design/icons';
import styles from './navbar.module.css';

const { Header } = Layout;

const Navbar: React.FC = () => {
    const items: MenuProps['items'] = ['Home', 'Celulares', 'Motocicletas'].map((key) => ({
        key,
        label: `${key}`,
    }));
    return (
        <div className={styles['navbar']}>
            <Layout>
                <Row className={styles['first-row']}>
                    <Col span={2} offset={1}>
                        <div className={styles['logo-div']}>
                            <a className={styles['navbar-brand']} href="/">
                                <img src={logo} alt="MacroPay"></img>
                            </a>
                        </div>
                    </Col>
                    <Col span={4} offset={11} pull={4}>
                        <div className={styles['icons']}>
                            <Button type="primary" className={styles['signup']}>
                                Crea Tu Cuenta
                            </Button>
                            <Button type="text" className={styles['login']}>
                                Iniciar sesión
                            </Button>
                            <ShoppingCartOutlined className={styles['cart']} />
                        </div>
                    </Col>
                    <div className={styles['credit-label']}>
                        <span>COMPRA A <br /> CRÉDITO</span>
                    </div>
                </Row>
            </Layout>
            <Layout>
                <Header className={styles['second-row']} >
                    <Menu className={styles['menu']} mode="horizontal" defaultSelectedKeys={['2']} items={items} />
                </Header>
            </Layout>
        </div>
    );
};

export default Navbar;