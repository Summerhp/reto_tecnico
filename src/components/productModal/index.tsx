import React, { useState } from 'react';
import { Button, Modal, Row, Col } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import modalImage from '../../assets/img/Modal.png';
import styles from './modal.module.css';

interface ProductModalProps {
    product: {
        id: string;
        nombre: string;
        marca: string;
        precio: number;
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
            <Button className={styles['button-modal']} type="primary" onClick={showModal}>Lo quiero </Button>
            <Modal className={styles.modalStyle} open={isModalOpen} footer={null} onCancel={handleCancel} closable={false}>
                <img className={styles['img-modal']}  src={modalImage}></img>
                <div className={styles['body-modal']} >
                    <Row>
                        <Col span={8}>
                            <img className={styles['product-modal']}  src={product.imagen}></img>
                        </Col>
                        <Col span={16}>
                            <Row className={styles['row-price']}  justify={'end'}>
                                <p className={styles['p-price']} >${product.precio} x 1</p>
                            </Row>
                            <Row className={styles['row-name']} >
                                <h3>{product.marca} {product.nombre}</h3>
                            </Row>
                            <Row>
                                <p className={styles['p-color']} >
                                    Color seleccionado: <span className={styles['span-color']} >{product.informacion.color}</span>
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Row className={styles['row-item']} >
                    <Col span={12}>
                        <p>1 ítem en tu carrito</p>
                    </Col>
                    <Col span={12} className={styles['col-subtotal']} >
                        <p>
                            Subtotal <span className={styles['span-subtotal']} >${product.precio}</span>
                        </p>
                    </Col>
                </Row>
                <br></br>
                <Row justify={'center'}>
                    <div className={styles['div-check']} >
                        <CheckOutlined className={styles.check}  />
                    </div>
                </Row>
                <div className={styles['body2-modal']} >
                    <Row>
                        <h2 className={styles['h2-text']} >Te vas a llevar este celular por solo $120 p/semana!</h2>
                    </Row>
                </div>
                <Row justify={'center'}>
                    <Button type="primary" className={styles['button-buy']} >
                        COMPRAR A CRÉDITO
                    </Button>
                </Row>
                <br></br>
                <Row align="middle" className={styles['row-espaciado']} >
                    <Col span={4} offset={6}>
                        <div className={styles['div-izq']} ></div>
                    </Col>
                    <Col span={4} className={styles['col-mid']} >
                        <p className={styles['p-mid']} >o puedes</p>
                    </Col>
                    <Col span={4}>
                        <div className={styles['div-der']} ></div>
                    </Col>
                </Row>
                <Row className={styles['row-contado']}  justify={'center'}>
                    <div>
                        <p className={styles['p-contado']} >Comprar a contado</p>
                    </div>
                </Row>
            </Modal>
        </>
    );
};

export default ProductModal;