import { FC } from 'react';
import { Helmet } from 'react-helmet';

interface Props {
}

const Home: FC<Props> = () => {
    return(
        <>
            <Helmet>
                <title>Manga Store - Home</title>
            </Helmet>

            <h1>Home Page</h1>
        </>
    );
}

export default Home;