import { FC } from 'react';

import './../styles/home.css';
import { CategoryCard, ProductCard } from '../components/home';
import { useHelmet } from '../hooks';

interface Props {
}

const Home: FC<Props> = () => {
    const { Helmet } = useHelmet({
        title: 'Manga Store - Home',
    })

    return (
        <main>
            <Helmet />

            <div className="hero"></div>

            <div className="section">
                <div className="section-header">
                    <h2>Manga Categories</h2>
                </div>
                <div className="section-content">
                    <div className="categories-container">
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

            <div className="section">
                <div className="section-header">
                    <h2>Popular Products</h2>
                </div>
                <div className="section-content">
                    <div className="products-container">
                        <ProductCard
                            title='Mato Seihei no Slave'
                            image='matoseihei'
                            description='This battle fantasy manga follows several heroines who protect people from the monsters that appear through a gate connecting to an alternate world known as the Mato.'
                            price='$21.99'
                        />
                        <ProductCard
                            title='Tsubaki-Chou Lonely Planet'
                            image='tsubaki-chou'
                            description="Ohno Fumi is a poor 2nd year high school student. Because of her father's debts, she's kicked out of her own home and has to rely on her own connections to survive. Thus begins her life as a live-in housekeeper for a reclusive writer."
                            price='$26.99'
                        />
                        <ProductCard
                            title='Yofukashi no Uta'
                            image='yofukashi'
                            description='Unable to sleep or find satisfaction in his daily life, Yamori Kou begins exploring the city at night, where he meets a strange girl who offers to help his insomnia by sleeping beside him.'
                            price='$19.99'
                        />
                        <ProductCard
                            title='Kaguya-sama: Love is War'
                            image='kaguya-sama'
                            description='Kaguya Shinomiya and Miyuki Shirogane are members of the prestigious student council. Love is war, and their battle to make the other confess begins now!'
                            price='$26.99'
                        />
                        <ProductCard
                            title='Kuzu no Honkai'
                            image='kuzu'
                            description="Mugi and Hanabi are the perfect high school couple...but their relationship is built on a single shared secret: They're each in love with someone else."
                            price='$19.99'
                        />
                        <ProductCard
                            title='Ganbare, Douki-chan!'
                            image='douki-chan'
                            description='"Cute" love story of girls who will stop at nothing but making the eyeless protagonist theirs!'
                            price='$19.99'
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;