import React from 'react';
import axios from 'axios';
import RenderMovie from './Movies';
import './App.css';
import './Movie.css'

class App extends React.Component{
  state = {
    isLoading : true,
    movies : [{title:'test'}]
  };

  getMovies = async() => {
    console.log('getMovies');
    const result = await axios.get('https://yts-proxy.now.sh/list_movies.json');
      console.log(result.data.data.movies);
    this.setState({isLoading:false, movies : result.data.data.movies})
  }

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    console.log("Constructor");
  }
  componentDidMount(){
    console.log("componet Mount");
    this.getMovies();
  }

  componentDidUpdate(){
    console.log("componet Update");
  }

  render(){ 
    console.log("componet Render");

    return(
      <div className="movies">
        {this.state.isLoading ? "Loading..." : this.state.movies.map(movie => <RenderMovie key={movie.id} title={movie.title} url={movie.large_cover_image} rating={movie.rating} summary={movie.summary} genres={movie.genres} year={movie.year} />)}
      </div>      
    )
  }
}

export default App;