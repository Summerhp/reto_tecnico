import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'antd';
import { HeartOutlined, HeartFilled, StarFilled, StarOutlined } from '@ant-design/icons';
import ProductModal from './productModal.tsx';
import './card.css';

interface ProductCardProps {
    id: string;
    nombre: string;
    marca: string;
    precio: number;
    reviews: number;
    imagen: string;
    favorito: boolean;
    informacion: JSON;
    toggleFavorite: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, nombre, marca, precio, reviews, imagen, favorito, informacion, toggleFavorite }) => {
    const [showModal, setShowModal] = useState(false);
    const [isHeartFilled, setIsHeartFilled] = useState(favorito);
    const handleClose = () => setShowModal(false);

    const renderStars = (rating: number) => {
        const filledStars = Math.floor(rating);
        const totalStars = 5;
        const starsArray = [];

        for (let i = 0; i < totalStars; i++) {
            if (i < filledStars) {
                starsArray.push(<StarFilled style={{ color: '#FFFF00', fontSize: '20px' }} />);
            } else {
                starsArray.push(<StarOutlined style={{ color: '#FFFF00', fontSize: '20px' }} />);
            }
        }

        return starsArray;
    };
    const changeHeart = () => {
        //Solicitud a la API para actualizar los favoritos
        setIsHeartFilled(!isHeartFilled);
        toggleFavorite(id);
    };

    return (
        <>
            <div style={{ marginRight: '2rem', marginBottom: '2rem', backgroundColor: '#EBEFF4' }}>
                <Card className="cardStyle" extra={<Button type="text" style={{ fontSize: '35px', padding: '0px', height: 'auto' }} onClick={() => changeHeart()}>{isHeartFilled ? <HeartFilled /> : <HeartOutlined />}</Button>} hoverable style={{ width: '18rem' }} cover={
                    <Link to={`/product/${id}`}>
                        <div>
                            <img src={imagen} alt={nombre} style={{ width: '288px', height: '288px' }} />
                            <div style={{ width: '70px', height: '70px', position: 'absolute', bottom: '180px', left: '10px', backgroundColor: '#FF4D4F', color: '#FFFFFF', borderRadius: '100%', fontSize: '25px', fontWeight: 'bold', alignContent: 'center', textAlign: 'center' }}>
                                <p style={{ margin: '0' }}>40%</p>
                            </div>

                        </div>
                    </Link>

                }>
                    <Row>
                        <Col span={12}>
                            <Link to={`/product/${id}`} style={{ color: '#000' }}>
                                <h4>{marca} {nombre}</h4>
                            </Link>
                            {renderStars(reviews)}
                            <p style={{ color: '#7D879C' }}>$120 p/semana o $520 p/mes</p>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#004AC1', margin: '0px' }}>${precio.toFixed(2)}</h2>
                            <h3 style={{ margin: '0px', marginBottom: '50px', color: '#7D879C', fontWeight: 'normal', textDecoration: 'line-through' }}>$99999</h3>
                            <ProductModal show={showModal} handleClose={handleClose} product={{ marca, nombre, precio, imagen, informacion }} />
                        </Col>
                    </Row>
                </Card>
            </div>
        </>
    );
};


export default ProductCard;