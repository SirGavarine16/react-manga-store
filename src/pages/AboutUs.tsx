import { FC } from 'react';

import './../styles/aboutus.css';
import { useHelmet } from '../hooks';

interface Props {
}

const AboutUs: FC<Props> = () => {
    const { Helmet } = useHelmet({
        title: 'Manga Store - About Us',
    });

    return (
        <main>
            <Helmet />

            <h1 className='page-title'>About Us</h1>

            <div className="aboutus-container">
                <div>
                    <picture>
                        <source srcSet='/images/wotakoi.avif' type='image/avif' />
                        <source srcSet='/images/wotakoi.webp' type='image/webp' />
                        <img src='/images/wotakoi.png' alt='About Us - Wotaku ni Koi wa Muzukashii' className="aboutus-image" />
                    </picture>
                </div>
                <div className="aboutus-content">
                    <p>
                        When the Manga Store was first planned, we were aiming to bring to all manga readers the experience that we most wanted: physical copies of our favorite stories including special editions available to everyone, everywhere.
                    </p>
                    <p>
                        Now, the Manga Store is planning to bring even more than just manga. Weeb merchandise such as clothes, props, cosplays, anime figures and other products are coming soon. Hoping to bring more and more products in the future, we hope our store can give you a new way to experience your favorite manga.
                    </p>
                </div>
            </div>

        </main>
    );
}

export default AboutUs;