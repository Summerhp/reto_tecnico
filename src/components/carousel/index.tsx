import React from 'react';
import { Carousel, Row, Col } from 'antd';

interface CarruselProps {
    images: string[];
}

const Carrusel: React.FC<CarruselProps> = ({ images }) => {
    return (
        <Row>
            <Col className='col-carousel' span={20} offset={2}>
                <Carousel arrows infinite={false}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img className='img-carousel' src={image} alt={`slide-${index}`} />
                        </div>
                    ))}
                </Carousel>
            </Col>
        </Row>
    );
}
export default Carrusel;
