import { StarFilled, StarOutlined } from '@ant-design/icons';
import './stars.css';

interface RenderStarsProps {
  rating: number;
  handleReviewsChange?: (rating: number) => void;
}

export const renderStars = ({ rating, handleReviewsChange }: RenderStarsProps) => {
  const filledStars = Math.floor(rating);
  const totalStars = 5;
  const starsArray = [];

  for (let i = 0; i < totalStars; i++) {
    const isFilled = i < filledStars;
    const StarIcon = isFilled ? StarFilled : StarOutlined;

    starsArray.push(
      <StarIcon
        key={i}
        className='star'        
        onClick={handleReviewsChange ? () => handleReviewsChange(i + 1) : undefined}
      />
    );
  }

  return starsArray;
};
