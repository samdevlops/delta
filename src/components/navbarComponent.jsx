import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return (
            <div class="navbar">
                <div class="navitems">
                    <Link to="/login" class="nav-links">Login</Link>
                </div>
                <div class="navitems">
                    <Link to="/signup" class="nav-links">Signup</Link>
                </div>
                <div class="navitems">
                    <Link to="/members" class="nav-links">Members</Link>
                </div>
            </div>
        );
    }
}
 
export default Navbar;