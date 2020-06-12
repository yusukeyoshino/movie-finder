import React from 'react';
import Card from '../../components/card/Card';
import SearchBar from '../../components/SearchBar';

const Layout = (props) => (
    <div>
        <SearchBar onTermSubmit={props.onSubmitClick}/>
            <div style={{color:'red',
                            textAlign:'center' }}>{props.errorMessage}</div>
        <Card movies={props.movies} loading={props.loading}/>
    </div>
);

export default Layout;