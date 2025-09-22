import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PostList from './components/PostList';
import Post from './components/Post';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:slug" element={<Post />} />
        </Routes>
      </main>
    </>
  );
}

export default App;