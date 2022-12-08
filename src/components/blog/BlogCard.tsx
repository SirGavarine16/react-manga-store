import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    title: string;
    contents: string[];
    img: string;
    imageCredits: string;
    imageDate: string;
    imageAlt: string;
}

const BlogCard: FC<Props> = ({ title, contents, img, imageCredits, imageDate, imageAlt }) => {
    const navigate = useNavigate();
    
    const navigateToEntryPage = () => {
        navigate('/blog/entry');
    }
    
    return (
        <div className="blog-card">
            <div className="blog-head">
                <picture>
                    <source srcSet={`/blog/${img}.avif`} type='image/avif' />
                    <source srcSet={`/blog/${img}.webp`} type='image/webp' />
                    <img src={`/blog/${img}.png`} alt={imageAlt} className='blog-img' />
                </picture>
                <div className='blog-img-data'>
                    <p>Image: <span>{imageCredits}</span>.</p>
                    <p>Date: <span>{imageDate}</span>.</p>
                </div>
            </div>
            <div className="blog-content">
                <h2>{title}</h2>
                {
                    contents.map((content, index) => (
                        <p key={`blog-p-${index}`}>{content}</p>
                    ))
                }
            </div>
            <div className="blog-btn">
                <button className="button-primary" onClick={navigateToEntryPage}>
                    Read more
                </button>
            </div>
        </div>
    );
}

export default BlogCard;