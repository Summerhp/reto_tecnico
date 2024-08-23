import React from 'react';
import { Row, Col, Breadcrumb, Button } from 'antd';
import './breadcrum.css'

interface MenuTopProps {
    marca: string;
    nombre: string;
}

const MenuTop: React.FC<MenuTopProps> = ({marca, nombre}) => {
    return (
        <Row className='row-menutop' align={'middle'} justify={'start'}>
            <Col span={3} offset={1}>
                <a className="navbar-brand" href="/">
                    <Button>
                        Regresar a resultados
                    </Button>
                </a>

            </Col>
            <Col span={4}>
                <Breadcrumb>
                    <Breadcrumb.Item>Productos</Breadcrumb.Item>
                    <Breadcrumb.Item>{marca}</Breadcrumb.Item>
                    <Breadcrumb.Item>{nombre}</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
        </Row>
    );
}
export default MenuTop;
