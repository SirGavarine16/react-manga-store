import { FC } from 'react';

interface Props {
    title: string;
    image: string;
    description: string;
    price: string;
}

const ProductCard: FC<Props> = ({ title, image, description, price }) => {
    return (
        <div className="product">
            <picture>
                <source srcSet={`/products/${image}.avif`} type='image/avif' />
                <source srcSet={`/products/${image}.webp`} type='image/webp' />
                <img src={`/products/${image}.png`} alt={title} className='product-image' />
            </picture>
            <div className="product-data">
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{price}</span>
                <button className='button-primary'>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;