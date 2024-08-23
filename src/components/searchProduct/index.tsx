import React from 'react';
import { Form, Row, Col, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './searchProduct.css'

const { Option } = Select;

interface SearchFormProps {
    setSearchTerm: (value: string) => void;
    setSelectedCategory: (value: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ setSearchTerm, setSelectedCategory }) => {
    return (
        <Form>
            <Row align={'middle'}>
                <Col span={12}>
                    <Form.Item>
                        <Input className='input-product' onChange={(e) => setSearchTerm(e.target.value)} prefix={<SearchOutlined />} placeholder="Encuentra el producto que necesitas." />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item>
                        <Select onChange={(value) => setSelectedCategory(value)} defaultValue="all-categories">
                            <Option value="all-categories">Todas las categorías</Option>
                            <Option value="celulares">Celulares</Option>
                            <Option value="motocicletas">Motos</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchForm;
