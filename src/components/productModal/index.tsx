import React, { useState } from 'react';
import { Button, Modal, Row, Col } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import modalImage from '../../assets/img/Modal.png';
import './modal.css';

interface ProductModalProps {
    show: boolean;
    handleClose: () => void;
    product: {
        id: string;
        nombre: string;
        marca: string;
        precio: number;
        reviews: number;
        imagen: string;
        informacion: JSON;
    };
}

const ProductModal: React.FC<ProductModalProps> = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button className='button-modal' type="primary" onClick={showModal}>Lo quiero </Button>
            <Modal className="modalStyle" open={isModalOpen} footer={null} onCancel={handleCancel} closable={false}>
                <img className='img-modal' src={modalImage}></img>
                <div className='body-modal'>
                    <Row>
                        <Col span={8}>
                            <img className='product-modal' src={product.imagen}></img>
                        </Col>
                        <Col span={16}>
                            <Row className='row-price' justify={'end'}>
                                <p className='p-price'>${product.precio} x 1</p>
                            </Row>
                            <Row className='row-name'>
                                <h3>{product.marca} {product.nombre}</h3>
                            </Row>
                            <Row>
                                <p className='p-color'>
                                    Color seleccionado: <span className='span-color'>{product.informacion.color}</span>
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Row className='row-item'>
                    <Col span={12}>
                        <p>1 ítem en tu carrito</p>
                    </Col>
                    <Col span={12} className='col-subtotal'>
                        <p>
                            Subtotal <span className='span-subtotal'>${product.precio}</span>
                        </p>
                    </Col>
                </Row>
                <br></br>
                <Row justify={'center'}>
                    <div className='div-check'>
                        <CheckOutlined className='check' />
                    </div>
                </Row>
                <div className='body2-modal'>
                    <Row>
                        <h2 className='h2-text'>Te vas a llevar este celular por solo $120 p/semana!</h2>
                    </Row>
                </div>
                <Row justify={'center'}>
                    <Button type="primary" className='button-buy'>
                        COMPRAR A CRÉDITO
                    </Button>
                </Row>
                <br></br>
                <Row align="middle" className='row-espaciado'>
                    <Col span={4} offset={6}>
                        <div className='div-izq'></div>
                    </Col>
                    <Col span={4} className='col-mid'>
                        <p className='p-mid'>o puedes</p>
                    </Col>
                    <Col span={4}>
                        <div className='div-der'></div>
                    </Col>
                </Row>
                <Row className='row-contado' justify={'center'}>
                    <div>
                        <p className='p-contado'>Comprar a contado</p>
                    </div>
                </Row>
            </Modal>
        </>
    );
};

export default ProductModal;