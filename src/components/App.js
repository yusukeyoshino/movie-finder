import React,{Component} from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import Card from './card/Card';
import axios from 'axios';
import '../reset.css';


class App extends Component {

    state = {movies: [],
             errorMessage: '',
             loading: false}

    onSubmitClick = async (term)=> {
        if(term){
            this.setState({movies:[],
                           loading:true ,
                           errorMessage:'' });
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ceb0bffcd90a1d670903f250bde029d8&language=en-US&query=${term}&include_adult=false`);
                console.log(response.data.results);
                this.setState({loading:false});
                if(response.data.results.length != 0){
                    this.setState({movies: response.data.results})
                } else {
                    this.setState({errorMessage:`There is no "${term}" results.`})
                }
                
            } catch {
                this.setState({loading:false})
                this.setState({errorMessage: 'Request failed. Please Try it again.'})
            }  
        } else {
            this.setState({errorMessage: 'Input is empty. Try it again.'})
        }


        
    }

    render(){
        return (
            <div>
                <Header />
                <SearchBar onTermSubmit={this.onSubmitClick}/>
                <div style={{color:'red',
                             textAlign:'center' }}>{this.state.errorMessage}</div>
                <Card movies={this.state.movies} loading={this.state.loading}/>
            </div>  
        );
    }
}

export default App;