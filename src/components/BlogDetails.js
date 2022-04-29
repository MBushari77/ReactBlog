import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import useFetch from "../logic/useFetch";
import { motion } from "framer-motion";



const BlogDetails = () => {
    const history = useHistory()
    const { id } = useParams()
    const {data: blog, pending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const handleDelete = () => {
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(() => {
        history.push('/')
      })
    }
  return (
      <div>
        {error && <p> { error } </p>}
        {pending && <p>Loading...</p>}
        { blog && (
        <article>
            <h2>{ blog.title }</h2>
            <p>Writen by { blog.auther }</p>
            <div>
                { blog.text }
            </div>
        </article>
        )}
        <div>
          <motion.button whileHover={{ scale: 1.2 }} onClick={ handleDelete}> Delete </motion.button>
        </div>
      </div>
  )
};

export default BlogDetails;
