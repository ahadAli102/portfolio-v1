'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Article {
    author: string;
    categories: string[];
    content: string;
    description: string;
    enclosure: Record<string, unknown>;
    guid: string;
    link: string;
    pubDate: string;
    thumbnail: string | null;
    title: string;
}

const Blog: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@linkonahad10")
            .then(res => res.json())
            .then(data => {
                console.log(data.items);
                const items = data.items as Article[];
                setArticles(items);
            });
    }, []);

    return (
        <section className="blog section" id="blog">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Latest Blog Posts</h2>
                    </div>
                </div>
                <div className="row">
                    {articles.map((article, index) => (
                        <div className="blog-item padd-15" key={index}>
                            <div className="blog-item-inner shadow-dark">
                                <div className="blog-img">
                                    <img
                                        src={(article.description as any).toString().match(/<img[^>]+src="([^">]+)"/)?.[1] || '/imgs/blog/default.jpg'}
                                        alt={article.title}
                                        className="blog-image" // Apply the responsive class here
                                    />
                                    <div className="blog-date">{new Date(article.pubDate).toDateString()}</div>
                                </div>
                                <div className="blog-info">
                                    <h4 className="blog-title">{article.title}</h4>
                                    <p className="blog-description">{article.description}</p>
                                    <p className="blog-tags">
                                        Tags: {article.categories.map((category, index) => (
                                        <a href={`#${category}`} key={index}>
                                            {category}
                                            {index < article.categories.length - 1 && ', '}
                                        </a>
                                    ))}
                                    </p>
                                    <Link href={article.link} className="blog-link"> Read More </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
