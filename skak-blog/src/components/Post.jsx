import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Post() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({});

  useEffect(() => {
    import(`../posts/${slug}.md`)
      .then((res) => {
        setMeta(res.attributes);
        setContent(res.body);
      })
      .catch(() => setContent('# Not found'));
  }, [slug]);

  return (
    <article>
      <h1>{meta.title}</h1>
      <time>{new Date(meta.date).toLocaleDateString('en-CA')}</time>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
}