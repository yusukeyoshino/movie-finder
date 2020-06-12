import React from 'react';
import classes from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = () => {


    return (
        <div>
            <div className={classes.Header}>
                <Link to='/'>MOVIE FINDER</Link>
                <Link to='./signup'>SIGN UP</Link>
            </div>
            
        </div>
    );
}

export default Header;