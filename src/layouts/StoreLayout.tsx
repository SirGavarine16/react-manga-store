import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { FooterBar, NavigationBar } from '../components';

interface Props {
}

const StoreLayout: FC<Props> = () => {
    return(
        <>
            <NavigationBar />
            <Outlet />
            <FooterBar />
        </>
    );
}

export default StoreLayout;