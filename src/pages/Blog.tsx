import { FC } from 'react';

import './../styles/blog.css';
import { useHelmet } from '../hooks';
import { BlogCard } from '../components';

interface Props {
}

const Blog: FC<Props> = () => {
    const { Helmet } = useHelmet({
        title: 'Manga Store - Blog'
    });

    return (
        <main>
            <Helmet />

            <h1 className="page-title">
                Blog
            </h1>

            <div className="section-content">
                <div className='blog-container'>
                    <div className="blog-list">
                        <BlogCard
                            title='New Marin Kitagawa figurine!'
                            contents={[
                                'Karou Sasaki, representative of Wonderful Works published on Twitter a new 3D model of the character Marin Kitagawa, protagonist of the Sono Bisque Doll wa Koi wo Suru franchise. According to Sasaki, the model seems to be still on CG animation phasae which does not represent yet a full confirmation to launch the official figure in a near future. Still with the great success of the anime adaptation, more and more anime figurines inspired on Marin are becoming trending as she occupies the top 1 place in female character of the season.',
                                'With this announcement we also know of another figurine of Marin Kitagawa that is already confirmed, SHIBUYA SCRAMBLE FIGURE has announced through the eStream company that a new 1/7 scale figure based on Marin Kitagawa is in the works, with her appearence based on cosplay outfit of "Shizuku-tan".'
                            ]}
                            imageCredits='Wonderful Work'
                            imageDate='05/02/2022'
                            img='1'
                            imageAlt='Marin Kitagawa figurine'
                        />
                        <BlogCard
                            title='Mato Seihei no Slave TV adaption confirmed!'
                            contents={[
                                "Shueisha confirmed the production of a TV anime adaptation of the manga written by Takahiro and illustrated by Youhei Takemura, Mato Seihei no Slave (Slave of the Magic Capital's Elite Troops). Yuuya Hirose and Akari Kitou are confirmed to be the protagonists Yuuki Wakura and Kyouka Uzen. Seven Arcs studios have been confirmed as the company managing the production but no premier date has been announced.",
                                'Takahiro, author of successful franchise Akame ga Kill! and Takemura started publication of the manga through the Shonen Jump Plus service from Shueisha on January 2019.'
                            ]}
                            imageCredits='Shueisha'
                            imageDate='19/11/2021'
                            img='2'
                            imageAlt='Mato Seihei no Slave TV anime art'
                        />
                    </div>
                    <div className="blog-aside">
                        <h3>Other Blog Entries</h3>
                        <ul>
                            <li>The Detective is already dead Vol. 7 details.</li>
                            <li>Why is Marin Kitagawa so popular?</li>
                            <li>Jujutsu Kaisen confirms a new movie based of spin-off.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Blog;