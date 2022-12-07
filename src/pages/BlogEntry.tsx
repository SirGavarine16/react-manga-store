import { FC } from 'react';

import './../styles/blog.css';
import { useHelmet } from '../hooks';

interface Props {
}

const BlogEntry: FC<Props> = () => {
    const { Helmet } = useHelmet({
        title: 'Manga Store - Blog Entry'
    });

    return (
        <main>
            <Helmet />

            <h1 className="page-title">
                Blog Entry
            </h1>

            <div className="entry-container">
                <div className="blog-head">
                    <picture>
                        <source srcSet={`/blog/1.avif`} type='image/avif' />
                        <source srcSet={`/blog/1.webp`} type='image/webp' />
                        <img src={`/blog/1.png`} alt='Marin Kitagawa figurine' className='blog-img' />
                    </picture>
                    <div className='blog-img-data'>
                        <p>Image: <span>Wonderful Work</span>.</p>
                        <p>Date: <span>05/02/2022</span>.</p>
                    </div>
                </div>
                <div className="blog-content">
                    <h2>New Marin Kitagawa figurine!</h2>
                    <p>Karou Sasaki, representative of Wonderful Works published on Twitter a new 3D model of the character Marin Kitagawa, protagonist of the Sono Bisque Doll wa Koi wo Suru franchise. According to Sasaki, the model seems to be still on CG animation phasae which does not represent yet a full confirmation to launch the official figure in a near future. Still with the great success of the anime adaptation, more and more anime figurines inspired on Marin are becoming trending as she occupies the top 1 place in female character of the season.</p>
                    <p>With this announcement we also know of another figurine of Marin Kitagawa that is already confirmed, SHIBUYA SCRAMBLE FIGURE has announced through the eStream company that a new 1/7 scale figure based on Marin Kitagawa is in the works, with her appearence based on cosplay outfit of "Shizuku-tan".</p>
                    <p>The TV anime adaptation started airing on january 8th and it has been confirmed to have a total length of twelve episodes, distribution of the show is managed by both Crunchyroll and Funimation platforms. Shinichi Fukuda, the original creator of the franchise publishes the manga on the Young Gangan magazine from Square Enix since January 2018.</p>
                </div>
            </div>

        </main>
    );
}

export default BlogEntry;