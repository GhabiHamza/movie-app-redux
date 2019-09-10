import React,{Component} from 'react';
import './App.css';
import MovieName from './MovieName';
import MovieCardList from './MovieCardList';
import MovieRating from './MovieRating';



/*const tablist=[{id:'inception',rating:'4' ,image:Logo ,title:'Inception-2010'},{id:'inception', rating:'3',image:Logo1 ,title:'showshank'},{id:'inception', rating:'1',image:Logo2 ,title:'bladerunner'},
               {id:'inception', rating:'2',image:Logo3,title:'A_Simple_Favor'},{id:'inception', rating:'4',image:Logo4,title:'ASingleShotPoster'},{id:'inception', rating:'5',image:Logo5,title:'The_Spy_Who_Dumped_Me'}]*/

               class App extends Component {
              
              
                /* onStarClick(nextValue, prevValue, name) {
                  this.setState({minRating: nextValue});
                }
                */
                render() {
                  return (
                  <div className="App">
                    <div className="container">
                      <div className='row name-rating'>
                       <MovieName 
                       />
                       <MovieRating/>
                       </div>
                      
                       <MovieCardList 
                        />
                      
              
              
              
                    </div>
                    
                    
                  </div>)}
              }
              
              
              export default App;
              