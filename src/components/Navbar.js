import { Link } from "react-router-dom";

const Navbar = () => {
  // const toHome = () => {
  //   href='/'
  // }
  // const toNewBlog = () => {
  //   location.href = '/newblog'
  // }
  return (
    <div className='nav_bar_container'>
        <div>
            <h1>Blog</h1>
        </div>
        <div>
            <Link  to='/'>
            Home
            </Link>
            <Link to='/newblog'>
              New Blog
            </Link>
            <Link to='/dnd'>
              Drag & drop
            </Link>
        </div>
    </div>
  )
};

export default Navbar;
