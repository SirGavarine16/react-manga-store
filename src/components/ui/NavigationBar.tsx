import { FC } from 'react';

import './../../styles/navigationbar.css';

interface Props {
}

const NavigationBar: FC<Props> = () => {
    return (
        <header>
            <p className="title">Manga <span>Store</span></p>
            <nav className='nav'>
                <a href='/'>Home</a>
                <a href='/aboutus'>About Us</a>
                <a href='/store'>Store</a>
                <a href='/blog'>Blog</a>
                <a href='/gallery'>Gallery</a>
                <a href='/contact'>Contact</a>
            </nav>
        </header>
    );
}

export default NavigationBar;