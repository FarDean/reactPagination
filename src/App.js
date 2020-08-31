import React,{useState,useEffect} from 'react';
import './App.css';
import axios from "axios";
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async ()=>{
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
      console.log(res.data)

    };
    fetchPosts()
  }, [])

  // Get current post
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change Page
  const paginate=(pageNumber)=> setCurrentPage(pageNumber)

  return (
    <div>
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
