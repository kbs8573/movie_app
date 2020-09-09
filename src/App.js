import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import RenderMovie from './Movies'

/*
const bookList = [
                    { id:0, 
                      title:"사피엔스", 
                      image:"https://image.yes24.com/Goods/23030284/L",
                      rating : 4.9
                    },
                    { id:1, 
                      title:"호모데우스", 
                      image:"https://lh3.googleusercontent.com/proxy/FHqWk9bErY71ZN8TkwId2cMovwXLpHOdmb0Xi1xPm36p0zhCvwt-NhYv_S6pKsskPnWts08xzbKgT1wX2gS2pK-Sw49fmh1NeXC0303z-YIvkJrzWdGJ8Gcs-OkgYRoQ",
                      rating : 5.0
                    },
                    { id:2, 
                      title:"21세기를 위한 21가지 제언", 
                      image:"https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile26.uf.tistory.com%2Fimage%2F993E4A4F5BB0358A2CD392",
                      rating : 4.5
                    }
                  ]                 


Book.propTypes = {
  title : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
  picture : PropTypes.string.isRequired
}

function Book({title, picture, rating}){
  return (
    <div>
      <h2>I read {title}</h2>
      <h4>Rating : {rating}/5.0</h4>
      <img src={picture} alt={title}></img>
    </div>
    );
}


function App() {

  return (
    <div>
      <h1>My BookList</h1>
      {bookList.map(book => 
        <Book key={book.id} title={book.title} picture={book.image} rating={book.rating} />
      )}
    </div>    
  );
}
*/
class App extends React.Component{
  state = {
    isLoading : true,
    movies : [{title:'test'}]
  };

  getMovies = async() => {
    console.log('getMovies');
    const result = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    //console.log(result.data.data.movies);
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
      <div>
        {this.state.isLoading ? "Loading..." : this.state.movies.map(movie => <RenderMovie key={movie.id} id={movie.id} title={movie.title} url={movie.medium_cover_image} />)}
      </div>      
    )
  }
}

export default App;