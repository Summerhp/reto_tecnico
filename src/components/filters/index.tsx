import React, { useState } from 'react';
import { Form, Checkbox, Row, Col, InputNumber } from 'antd';
import { renderStars } from '../../utils/renderStars';
import styles from './filters.module.css'

interface Brand {
    name: string;
}

interface FiltersProps {
    brands: Brand[];
    onFiltersChange: (filters: { brands: string[]; reviews: number; priceRange: { min: number; max: number } }) => void;
}

const Filters: React.FC<FiltersProps> = ({ brands, onFiltersChange }) => {

    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedReviews, setSelectedReviews] = useState<number>(0);
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: Infinity });
    const [filledStars, setFilledStars] = useState<number>(0)

    const handleBrandChange = (checkedValues: string[]) => {
        console.log(checkedValues)
        setSelectedBrands(checkedValues);
        onFiltersChange({ brands: checkedValues, reviews: selectedReviews, priceRange });
    };

    const handleReviewsChange = (reviews: number) => {
        if (reviews === filledStars) {
            setFilledStars(0);
            setSelectedReviews(0);
            onFiltersChange({ brands: selectedBrands, reviews: 0, priceRange });
        } else {
            setFilledStars(reviews);
            setSelectedReviews(reviews);
            onFiltersChange({ brands: selectedBrands, reviews, priceRange });
        }
    };

    const handlePriceChange = (min: number, max: number) => {
        setPriceRange({ min, max });
        onFiltersChange({ brands: selectedBrands, reviews: selectedReviews, priceRange: { min, max } });
    };

    return (
        <div className={styles['div-filters']}>
            <div>
                <div>
                    <h3 className={styles['h3-titles']}>Marcas</h3>
                    <div className={styles['div-checkbox']}>
                        <Checkbox.Group className={styles['checkbox-group']} onChange={handleBrandChange}>
                            {brands.map((brand, index) => (
                                <Form.Item className={styles['form-items']} key={index}>
                                    <Checkbox value={brand}>
                                        {brand.name}
                                    </Checkbox>
                                </Form.Item>
                            ))}
                        </Checkbox.Group>
                    </div>
                </div>
                <div>
                    <h3 className={styles['h3-titles']}>Precio</h3>
                    <Row gutter={16}>
                        <Col span={10}>
                            <Form.Item htmlFor="minPrice">
                                <InputNumber onChange={(value) => handlePriceChange(value, priceRange.max)} type="number" id="minPrice" placeholder="100" min={0} max={Infinity} />
                            </Form.Item>
                        </Col>
                        <Col>
                            -
                        </Col>
                        <Col span={10}>
                            <Form.Item htmlFor="maxPrice">
                                <InputNumber onChange={(value) => handlePriceChange(priceRange.min, value)} id="maxPrice" placeholder="5000" min={0} max={Infinity} />
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h3 className={styles['h3-titles']}>Reviews</h3>
                    <Row>
                        {renderStars({rating: selectedReviews, handleReviewsChange: handleReviewsChange})}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Filters;
