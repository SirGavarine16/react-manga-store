import { FC } from 'react';

interface Props {
    title: string;
    image: string;
    imageAlt: string;
}

const CategoryCard: FC<Props> = ({ title, image, imageAlt }) => {
    return (
        <div className="category-card">
            <picture>
                <source srcSet={`/images/${image}.avif`} type='image/avif' />
                <source srcSet={`/images/${image}.webp`} type='image/webp' />
                <img src={`/images/${image}.png`} alt={imageAlt} className='category-image' />
            </picture>
            <div className="category-title">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default CategoryCard;