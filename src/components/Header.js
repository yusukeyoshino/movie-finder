import React from 'react';

const Header = () => {
    const headerStyle = {
        height: '60px',
        color:'#A1A1A1',
        textAlign: 'center',
        fontSize:'25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: '2px',
        marginTop: '10px'
    }

    return (
        <div style={headerStyle}>
            MOVIE FINDER
        </div>
    );
}

export default Header;