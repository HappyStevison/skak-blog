import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1><Link to="/">♟ Chess Blog</Link></h1>
      <nav>
        <Link to="/">Posts</Link>
        <a href="https://github.com/dit-brugernavn" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
    </header>
  );
}