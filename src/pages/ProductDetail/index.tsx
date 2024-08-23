import React, { useState } from 'react';
import { Breadcrumb, Row, Col, Button, Image, Space, Descriptions, Tabs, Typography, List, Slider } from 'antd';
import { useParams } from 'react-router-dom';
import ProductGrid from '../../components/productGrid';
import { StarFilled, StarOutlined, CreditCardOutlined, ArrowRightOutlined, CheckOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import MenuTop from '../../components/breadcrum';
import './productDetail.css';
import data from '../../utils/data.json';
import ProductGallery from '../../components/productPhotos';
import ProductInfo from '../../components/productInfo';
import { renderStars } from '../../utils/renderStars';
import PromotionBanner from '../../components/promotionBanner';
import ProductDetailInfo from '../../components/productDetailPhoto';

const { Title, Text } = Typography;

interface Product {
    id: string;
    nombre: string;
    marca: string;
    precio: number;
    reviews: number;
    imagen: string;
    informacion: {
        fabricante?: string;
        peso?: string;
        dimensiones?: string;
        pais_de_origen?: string;
        numero_de_modelo?: string;
        color?: string;
        material?: string;
        cantidad_de_piezas?: number;
        caracteristicas_especiales?: string;
        componentes_incluidos?: string;
        motor?: string;
        potencia?: string;
        transmision?: string;
    };
}
const { TabPane } = Tabs;

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    console.log(id)
    const allProducts: Product[] = data;
    const product = allProducts.find((prod) => prod.id === id);
    if (!product) {
        return <div>Producto no encontrado</div>;
    }
    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const changeHeart = () => {
        setIsHeartFilled(!isHeartFilled);
    }
    const relatedProducts = allProducts.filter((prod) => prod.id !== id).slice(0, 4);
    return (
        <>
            <MenuTop marca={product.marca} nombre={product.nombre}></MenuTop>
            <Row>
                <ProductGallery product={{ imagen: product.imagen }} changeHeart={changeHeart} isHeartFilled={isHeartFilled}></ProductGallery>
                <Col span={14}>
                    <ProductInfo product={product} renderStars={(reviews) => renderStars({ rating: reviews })} />
                    <PromotionBanner price={(product.precio/3)}></PromotionBanner>
                </Col >
            </Row >
            <Row>
                <ProductDetailInfo product={product}></ProductDetailInfo>
                <Col span={13}>
                    <Row style={{ minHeight: '558px' }}>
                        <Col offset={1}>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Otras Especificaciones" key="1">
                                    <Descriptions className='tableStyle' bordered column={1} labelStyle={{ fontWeight: 'bold', width: '200px' }}>
                                        {product.informacion.fabricante && <Descriptions.Item label="Fabricante: ">{product.informacion.fabricante}</Descriptions.Item>}
                                        {product.informacion.peso && <Descriptions.Item label="Peso del producto: ">{product.informacion.peso}</Descriptions.Item>}
                                        {product.informacion.dimensiones && <Descriptions.Item label="Dimensiones: ">{product.informacion.dimensiones}</Descriptions.Item>}
                                        {product.informacion.pais_de_origen && <Descriptions.Item label="País de Origen: ">{product.informacion.pais_de_origen}</Descriptions.Item>}
                                        {product.informacion.numero_de_modelo && <Descriptions.Item label="Número de modelo: ">{product.informacion.numero_de_modelo}</Descriptions.Item>}
                                        {product.informacion.color && <Descriptions.Item label="Color: ">{product.informacion.color}</Descriptions.Item>}
                                        {product.informacion.material && <Descriptions.Item label="Material: ">{product.informacion.material}</Descriptions.Item>}
                                        {product.informacion.cantidad_de_piezas && <Descriptions.Item label="Cantidad de piezas: ">{product.informacion.cantidad_de_piezas}</Descriptions.Item>}
                                        {product.informacion.caracteristicas_especiales && <Descriptions.Item label="Características especiales: ">{product.informacion.caracteristicas_especiales}</Descriptions.Item>}
                                        {product.informacion.componentes_incluidos && <Descriptions.Item label="Componentes incluidos: ">{product.informacion.componentes_incluidos}</Descriptions.Item>}
                                        {product.informacion.motor && <Descriptions.Item label="Motor: ">{product.informacion.motor}</Descriptions.Item>}
                                        {product.informacion.potencia && <Descriptions.Item label="Potencia: ">{product.informacion.potencia}</Descriptions.Item>}
                                        {product.informacion.transmision && <Descriptions.Item label="Transmisión: ">{product.informacion.transmision}</Descriptions.Item>}
                                    </Descriptions>
                                </TabPane>
                                <TabPane tab="Reviews (3)" key="2">
                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                    <Row align={'middle'} style={{ minHeight: '558px', backgroundImage: `url()`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >
                        <Col span={8} style={{ borderRadius: '8px', padding: '20px' }}>
                            <Title level={3} style={{ color: '#fff' }}>
                                Lleva este celular a Crédito!
                            </Title>
                            <Text style={{ color: '#FFD300', fontSize: '18px' }}>¿Qué necesitas?</Text>
                            <List
                                style={{ marginTop: '10px', color: '#FFFF00' }}
                                dataSource={[
                                    'Tu cuenta de Facebook',
                                    'Tu INE Vigente',
                                    'Correo electrónico',
                                ]}
                                renderItem={(item) => (
                                    <List.Item style={{ color: '#FFFFFF', fontSize: '16px' }}>
                                        <CheckOutlined style={{ marginRight: '8px', color: '#A2D456' }} />
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col span={10} offset={4} style={{ background: '#fff', borderRadius: '8px' }}>
                            <div style={{ margin: '20px', height: '400px', alignContent: 'center' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '48px', color: '#0049A1', marginBottom: '10px' }}><img src="../Happy_face.svg" alt="MacroPay" style={{ width: '20%' }} /></div>
                                    <Title level={4}>¿Te falta una lanita?</Title>
                                    <Text style={{ fontSize: '17px' }}>ENGANCHE $520,00</Text>
                                    <br />
                                    <Text style={{ fontSize: '17px' }}>PAGO SEMANAL $125,00</Text>
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <Slider
                                        defaultValue={15}
                                        style={{ marginBottom: '10px' }}
                                    />
                                    <Text>Enganche</Text>
                                </div>
                                <Row>
                                    <Button type="primary" block style={{ background: '#FFD300', color: '#004AC1', fontSize: '25px', padding: '30px', fontWeight: 'bold' }}>
                                        Aplica ahora
                                    </Button>
                                </Row>
                                <Text type="secondary" style={{ display: 'block', marginTop: '10px', fontSize: '12px', textAlign: 'center' }}>
                                    *Hasta $2,000 de manera fácil, rápida y confiable
                                </Text>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row justify={'center'}>
                <h1>Productos Relacionados</h1>
            </Row>
            <Row justify={'center'}>
                <Col>
                    <ProductGrid products={relatedProducts} />
                </Col>
            </Row>
        </>
    )
};

export default ProductDetail;