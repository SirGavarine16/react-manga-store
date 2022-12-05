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
                <div className="section-header">
                    <h2>About Manga Store</h2>
                </div>
            </div>
        </main>
    );
}

export default Home;