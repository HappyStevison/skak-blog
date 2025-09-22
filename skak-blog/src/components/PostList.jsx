import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // webpack magic: kræv alle md-filer i /posts
    const ctx = require.context('../posts', true, /\.md$/);
    const tmp = [];
    ctx.keys().forEach((k) => {
      const { attributes } = ctx(k);
      tmp.push({ ...attributes, slug: k.replace('./', '').replace('.md', '') });
    });
    // sorter nyeste først
    tmp.sort((a, b) => new Date(b.date) - new Date(a.date));
    setPosts(tmp);
  }, []);

  return (
    <section>
      <h2>Latest posts</h2>
      {posts.map((p) => (
        <article key={p.slug} className="post-card">
          <h3>
            <Link to={`/post/${p.slug}`}>{p.title}</Link>
          </h3>
          <time>{new Date(p.date).toLocaleDateString('en-CA')}</time>
          <p>{p.excerpt || ''}</p>
        </article>
      ))}
    </section>
  );
}