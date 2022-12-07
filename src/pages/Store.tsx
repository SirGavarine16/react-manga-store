import { FC } from 'react';

import './../styles/store.css';
import { useHelmet } from '../hooks';

interface Props {
}

const Store: FC<Props> = () => {
    const { Helmet } = useHelmet({
        title: 'Manga Store - Store'
    });

    return(
        <main>
            <Helmet />

            <h1 className="page-title">Store</h1>

        </main>
    );
}

export default Store;