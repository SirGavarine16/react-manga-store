import { FC } from 'react';
import { Helmet } from 'react-helmet';

import './../styles/store.css';

interface Props {
}

const Store: FC<Props> = () => {
    return(
        <main>
            <Helmet>
                <title>Manga Store - Store</title>
            </Helmet>

            <h1 className="page-title">Store</h1>

        </main>
    );
}

export default Store;