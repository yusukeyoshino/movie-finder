import React,{useState} from 'react';
import SearchBar from './SearchBar';
import Header from './Header/Header';
import Card from './card/Card';
import axios from 'axios';
import '../reset.css';
import Layout from '../hoc/Layout/Layout';
import {BrowserRouter,Route,withRouter} from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import movieDetail from './MovieDetail/MovieDetail';

const App = () => {

    const [movies,setMovies] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');
    const [loading,setLoading] = useState(false);
    const [selectedMovie,setSelectedMovie] = useState(null);

    const onSubmitClick = async (term)=> {
        if(term){
            setLoading(true);
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ceb0bffcd90a1d670903f250bde029d8&language=en-US&query=${term}&include_adult=false`);
                console.log(response.data.results);
                setLoading(false);
                if(response.data.results.length != 0){
                    setMovies(response.data.results)
                } else {
                    setErrorMessage(`There is no "${term}" results.`);
                }
                
            } catch {
                setLoading(false);
                setErrorMessage('Request failed. Please Try it again.');
            }  
        } else {
                setErrorMessage('Input is empty. Try it again.');
        }

        
    }
    
  

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Route path='/' exact render={(props) => <Layout {...props}  onSubmitClick={onSubmitClick} errorMessage={errorMessage} movies={movies} loading={loading}/>} />
                <Route path='/signup' component={SignUp}/>
                <Route path='/detail/:id'  component={movieDetail}/>
            </BrowserRouter>
        </div>  
    );
}

export default App;