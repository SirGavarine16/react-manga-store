import { FC } from 'react';
import { Helmet } from 'react-helmet';

import './../styles/home.css';

interface Props {
}

const Home: FC<Props> = () => {
    return(
        <>
            <Helmet>
                <title>Manga Store - Home</title>
            </Helmet>

            <div className="hero"></div>

            <h1>Home Page</h1>
        </>
    );
}

export default Home;