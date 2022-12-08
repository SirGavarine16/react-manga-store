import { FC } from 'react';

import './../styles/gallery.css';
import { useHelmet } from '../hooks';

interface Props {
}

const Gallery: FC<Props> = () => {
    const { Helmet } = useHelmet({
        title: 'Manga Store - Gallery'
    });

    return (
        <main>
            <Helmet />

            <h1 className="page-title">
                Gallery
            </h1>

            <div className="section-content">
                <div className="gallery-container">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((number) => (
                            <picture key={`gallery-img-${number}`}>
                                <source srcSet={`/gallery/${number}.avif`} type='image/avif' />
                                <source srcSet={`/gallery/${number}.webp`} type='image/webp' />
                                <img src={`/gallery/${number}.png`} alt={`Gallery pic no. ${number}`} className='gallery-image' />
                            </picture>
                        ))
                    }
                </div>
            </div>

        </main>
    );
}

export default Gallery;