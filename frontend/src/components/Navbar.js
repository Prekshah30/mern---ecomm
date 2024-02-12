import React from 'react';
import {Link , Routes,Route,useNavigate} from 'react-router-dom';

const Navbar=()=>{
    const auth=localStorage.getItem('user');
    const navigate= useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signup')
    }

    return(
        <div>
            { auth ? <ul className='Navbar'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">AddProducts</Link></li>
                <li><Link to="/update">UpdateProducts</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup"> Logout ({JSON.parse(auth).name})</Link></li>
                {/* <li>{auth ? <Link onClick={logout} to="/signup">Logout</Link>:<Link to="/signup">signup</Link>}</li>
                <li><Link to="/login">Login</Link></li> */}
               
                
            </ul>:

<ul className='Navbar nav-right'>
<li><Link to="/signup">Sign Up</Link></li>
<li><Link to="/login">Login</Link></li>
</ul>
}
        </div>
    )
}

export default Navbar;