import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

// import the components
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogDetails from './components/BlogDetails';
import AddBlog from './components/AddBlog';
import Modal from './components/Modal';
import Card from './components/Card';
import DnD from './components/DnD';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="container">
      <center>
        <motion.button whileHover={{ 
          scale: [1, 1.2],
          transition: {
            yoyo: Infinity,
            duration: 0.4
          }
          }} className='send_button' onClick={ () => setShowModal(true) }>Show</motion.button>
        <Modal showModal={ showModal } setShowModal={ setShowModal } />
        <Router>
          <Navbar />
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/newblog'>
              <AddBlog />
            </Route>

            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>

            <Route path='/card'>
              <Card />
            </Route>

            <Route path='/dnd'>
              <DnD />
            </Route>

            <Route path='*'>
              <h1>ERORR 404</h1>
              <p>Nothing found</p>
            </Route>

          </Switch>
        </Router>
      </center>
    </div>
  );
}

export default App;

