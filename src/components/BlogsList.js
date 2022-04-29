import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
	  opacity: 1,
	  scale: 1,
    duration: 1,
	  transition: {
		delayChildren: 0.1,
		staggerChildren: 0.5
	  }
	},
}
	
const item = {
	hidden: { y: 320, opacity: 0 },
  duration: 2,
	visible: {
	  y: 0,
	  opacity: 1
	},
  hover:{
    scale: 1.5,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 300,
      duration: 0.3
    }
  }
}


const BlogsList = ({blogs, pending, error}) => {
  console.log(blogs)
  return (
      <div className='welcome'>
        <motion.div className='Container'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.div
            variants={item}
            initial='hidden'
            animate='visible'
            whileHover='hover'
          >
            A
          </motion.div>

          <motion.div
            variants={item}
            initial='hidden'
            animate='visible'
            whileHover='hover'
          >
            B
          </motion.div>

          <motion.div
            variants={item}
            initial='hidden'
            animate='visible'
            whileHover='hover'
          >
            C
          </motion.div>

          <motion.div
            variants={item}
            initial='hidden'
            animate='visible'
            whileHover='hover'
          >
            D
          </motion.div>
        </motion.div>
        <motion.h1
          initial={{ scale: 0 }}

          animate={{
            scale: 1.5,
            type: "spring",

          }}
        >
          <p>Welcome</p>
        </motion.h1>
        {error && <p> { error } </p>}
        {pending && <p>Loading...</p>}
        { blogs && 
        (<div className='blogs_container d_container'>

              <div className='blog_cont'>
                  { blogs.map((blog, index) => (
                    <div key={index}>
                        <Link to={`/blogs/${blog.id}`}>
                          <h3> { blog.title }</h3>
                          <p> { blog.text } </p>
                          <p>H</p>
                        </Link>
                    </div>
                  )) }
              </div>
        </div>) }
    </div>
  )
}

export default BlogsList;
