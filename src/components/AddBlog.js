import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';


const AddBlog = () => {
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [auther, setAuther] = useState('')
    const [pending, setPending] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, text, auther };
        setPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added!')
            setPending(false)
            history.go(-1);
        })
    } 
  return (
    <div className='form_container'>
        <form onSubmit={ handleSubmit }>
            <div className='filed_container'>
                <input
                placeholder='Blog title'
                type='text'
                value={ title }
                onChange={
                    (e) => setTitle(e.target.value)
                }
                />
            </div>
            <div className='filed_container'>
                <textarea
                placeholder='Blog body'
                value={ text }
                onChange={
                    (e) => setText(e.target.value)
                }
                ></textarea>
            </div>
            <div className='filed_container'>
                <select value={ auther} onChange={(e) => setAuther(e.target.value)}>
                    <option value='Amar'>Amar</option>
                    <option value='Bushari'>Bushari</option>
                    <option value='Fathi'>Fathi</option>
                </select>
            </div>
            <motion.div initial={{y: -100}} animate={{y: 0}} transition={{type: 'spring', duration: 0.5, stiffness: 120}} >
                { pending && <motion.button whileHover={{ scale: 2 }} type='submit'> Adding blog...</motion.button> }
                { !pending && <button type='submit'> Add blog</button> }
            </motion.div>
        </form>
    </div>
  )
};

export default AddBlog;
