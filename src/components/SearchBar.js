import React,{Component} from 'react';

class SearchBar extends Component  {

    state = {term: ''}


    onInputChange = (e) => {
      this.setState({term: e.target.value})
  }

    onInputSubmit = (e) => {
      e.preventDefault()
      this.props.onTermSubmit(this.state.term)
      console.log(this.state.term);
    }
  

    render(){
        const SearchBarStyle = {
          margin:"0 auto",
          display: "flex",
          justifyContent: "center",
          marginBottom: '70px'
      }
    

        return (
            <div>
              <div style={SearchBarStyle}>
                <form　onSubmit={this.onInputSubmit}>
                    <input onChange={this.onInputChange}type='text' name='title' style={{width: '200px'}}/>
                    <button  className={'btn'} onClick={this.onInputSubmit} style={{
                      backgroundColor:'#16CE89',
                      color: 'white'
                    }}>Search</button>
                </form>
              </div>
            </div>
        );
    }
}

export default SearchBar;