import React from 'react';
import { Row, Col, Tabs, Descriptions } from 'antd';
import './antdDescription.css'
import styles from './productSpecification.module.css';

const { TabPane } = Tabs;

interface ProductSpecificationsProps {
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

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ product }) => {
    return (
        <Row className={styles.rowMain}>
            <Col offset={1}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Otras Especificaciones" key="1">
                        <Descriptions className="tableStyle" bordered column={1}>
                            {product.informacion.fabricante && (<Descriptions.Item label="Fabricante: "> {product.informacion.fabricante}</Descriptions.Item>)}
                            {product.informacion.peso && (<Descriptions.Item label="Peso del producto: ">{product.informacion.peso}</Descriptions.Item>)}
                            {product.informacion.dimensiones && (<Descriptions.Item label="Dimensiones: ">{product.informacion.dimensiones}</Descriptions.Item>)}
                            {product.informacion.pais_de_origen && (<Descriptions.Item label="País de Origen: ">{product.informacion.pais_de_origen}</Descriptions.Item>)}
                            {product.informacion.numero_de_modelo && (<Descriptions.Item label="Número de modelo: ">{product.informacion.numero_de_modelo}</Descriptions.Item>)}
                            {product.informacion.color && (<Descriptions.Item label="Color: ">{product.informacion.color}</Descriptions.Item>)}
                            {product.informacion.material && (<Descriptions.Item label="Material: ">{product.informacion.material}</Descriptions.Item>)}
                            {product.informacion.cantidad_de_piezas && (<Descriptions.Item label="Cantidad de piezas: ">{product.informacion.cantidad_de_piezas}</Descriptions.Item>)}
                            {product.informacion.caracteristicas_especiales && (<Descriptions.Item label="Características especiales: ">{product.informacion.caracteristicas_especiales}</Descriptions.Item>)}
                            {product.informacion.componentes_incluidos && (<Descriptions.Item label="Componentes incluidos: ">{product.informacion.componentes_incluidos}</Descriptions.Item>)}
                            {product.informacion.motor && (<Descriptions.Item label="Motor: ">{product.informacion.motor}</Descriptions.Item>)}
                            {product.informacion.potencia && (<Descriptions.Item label="Potencia: ">{product.informacion.potencia}</Descriptions.Item>)}
                            {product.informacion.transmision && (<Descriptions.Item label="Transmisión: ">{product.informacion.transmision}</Descriptions.Item>)}
                        </Descriptions>
                    </TabPane>
                    <TabPane tab="Reviews (3)" key="2">
                        
                    </TabPane>
                </Tabs>
            </Col>
        </Row>
    );
};

export default ProductSpecifications;
