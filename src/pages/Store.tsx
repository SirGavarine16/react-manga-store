import { FC } from 'react';

import './../styles/store.css';
import { useHelmet } from '../hooks';
import { ProductCard } from '../components';

interface Props {
}

const Store: FC<Props> = () => {
    const { Helmet } = useHelmet({
        title: 'Manga Store - Store'
    });

    return (
        <main>
            <Helmet />

            <h1 className="page-title">Store</h1>

            <div className="section-content">
                <div className="products-container">
                    <ProductCard
                        title='Kimi no Suizou wo Tabetai'
                        image='kiminosuizo'
                        description='After his classmate and crush is diagnosed with a pancreatic disease, an average high schooler sets out to make the most of her final days.'
                        price='$24.99'
                    />
                    <ProductCard
                        title='Sono Bisque Doll wa Koi wo suru'
                        image='sonobisque'
                        description='Wakana Gojou is was socially traumatized in the past due to his passion, leading him to social recluse until one day he had an encounter with a sociable gyaru. They soon share their passions which leads to their odd relationship.'
                        price='$24.99'
                    />
                    <ProductCard
                        title='Uruwashi no Yoi no Tsuki'
                        image='uruwashi'
                        description='Because of her appearence and her behavior, Yoi has been continuously treated as a prince, despite being a girl. One day she somehow got entangled with one of her senpais at school, someone who is also being called "prince".'
                        price='$24.99'
                    />
                    <ProductCard
                        title='Spy x Family'
                        image='spyxfamily'
                        description='Twilight, a mastes spy has spent his days on undercover missions. One day he receives a particularly new mission, he must form a temporary family and start a new life.'
                        price='$19.99'
                    />
                    <ProductCard
                        title='Black Clover'
                        image='blackclover'
                        description='Asta and Yuno, inseparable since children are heading out in the world, competing for the same goal... to become the next Wizard King.'
                        price='$21.99'
                    />
                    <ProductCard
                        title='Komi-san wa Komyushou Desu'
                        image='komi-san'
                        description="Komi-san is the beautiful and admirable girl that no one can take their eyes off of. But she has a secret: she's really bat at communicating with others."
                        price='$26.99'
                    />
                </div>
            </div>
            
        </main>
    );
}

export default Store;