import React from 'react';
import { Button } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import styles from './HeartButton.module.css';

interface HeartButtonProps {
    id: string;
    isHeartFilled: boolean;
    toggleFavorite: (id: string) => void;
    variant: 'card' | 'productPhotos';
}

const HeartButton: React.FC<HeartButtonProps> = ({ id, isHeartFilled, toggleFavorite, variant }) => {
    return (
        <Button
            type="text"
            className={classNames(styles['button-heart'], {
                [styles['card-heart']]: variant === 'card',
                [styles['product-photos-heart']]: variant === 'productPhotos',
            })}
            onClick={toggleFavorite(id)}
        >
            {isHeartFilled ? <HeartFilled /> : <HeartOutlined />}
        </Button>
    );
};

export default HeartButton;