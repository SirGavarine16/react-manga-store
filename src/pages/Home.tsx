import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { CategoryCard } from '../components/home';

import './../styles/home.css';

interface Props {
}

const Home: FC<Props> = () => {
    return (
        <main>
            <Helmet>
                <title>Manga Store - Home</title>
            </Helmet>

            <div className="hero"></div>

            <div className="section">
                <div className="section-header">
                    <h2>Manga Categories</h2>
                </div>
                <div className="section-content">
                    <CategoryCard
                        title='Romance'
                        image='romance'
                        imageAlt='Romance - Tsubaki-chou Lonely Planet'
                    />
                    <CategoryCard
                        title='Action'
                        image='action'
                        imageAlt='Action - Zipang'
                    />
                    <CategoryCard
                        title='Fantasy'
                        image='fantasy'
                        imageAlt='Fantasy - Matou Seihei no Slave'
                    />
                </div>
            </div>

            <div className="section">
                <div className="about-section">
                    <div>
                        <picture>
                            <source srcSet='/images/aboutstore.avif' type='image/avif' />
                            <source srcSet='/images/aboutstore.webp' type='image/webp' />
                            <img src='/images/aboutstore.png' alt='About Manga Store - Soul Eater' className='about-image' />
                        </picture>
                    </div>
                    <div className='about-content'>
                        <h2>About Manga Store</h2>
                        <p>We are the Manga Store, an online store dedicated entirely to manga and weeb culture, always trying our best to deliver the best reading experience to our customers with special prices and editions of our favorite stories. There's a manga waiting just for you!</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;