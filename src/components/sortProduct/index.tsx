import React from 'react';
import { Row, Col, Select } from 'antd';
import './sortProduct.css'

const { Option } = Select;

interface SortSelectProps {
  setSortOrder: (value: string) => void;
}

const SortSelect: React.FC<SortSelectProps> = ({ setSortOrder }) => {
  return (
    <Row>
      <Col span={6} offset={6}>
        Ordenar por:
      </Col>
      <Col span={12}>
        <Select className='select-sort' onChange={(value) => setSortOrder(value)} defaultValue="review">
          <Option value="review">Mejores reviews</Option>
          <Option value="asc">Precio ascendente</Option>
          <Option value="desc">Precio descendente</Option>
        </Select>
      </Col>
    </Row>
  );
};

export default SortSelect;
