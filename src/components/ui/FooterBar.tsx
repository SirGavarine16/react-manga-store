import { FC } from 'react';

import './../../styles/footerbar.css';

interface Props {
}

const FooterBar: FC<Props> = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-section'>
                    <p>Categories</p>
                    <ul>
                        <li>Romance</li>
                        <li>Action</li>
                        <li>Fantasy</li>
                        <li>Slice of Life</li>
                        <li>Mystery</li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <p>About Us</p>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <p>Support</p>
                    <ul>
                        <li>FAQs</li>
                        <li>Online Support</li>
                        <a href="https://github.com/SirGavarine16" target='_blank' rel='noreferrer noopener'>GitHub</a>
                    </ul>
                </div>
            </div>
            <div className='footer-end'>
                <p>Developed by <a href="https://danieldelagavarain-dev.vercel.app/" target='_blank' rel='noreferrer noopener'>Daniel De la Cruz</a> © 2022</p>
            </div>
        </footer>
    );
}

export default FooterBar;