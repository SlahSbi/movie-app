import React, { Component } from 'react';
import './App.css';
import Card from './card';
import Nav from './nav'

let arr = [{
  id: '1',
  rating: '1',
  image: require('./harrypotter.jpg'),
  title: 'Harry Potter'
},
{
  id: '2',
  rating: '3',
  image: require('./pink.jpg'),
  title: 'Pink Panther'
},
{
  id: '3',
  rating: '5',
  image: require('./batman.jpg'),
  title: 'Batman'
},
{
  id: '4',
  rating: '2',
  image: require('./misterbean.jpg'),
  title: 'Mister Bean'
},
{
  id:'5',
  rating: '4',
  image: require('./popeye.jpg'),
  title: 'Popeye'
},
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filtred1: arr,
      filtred2: arr,

    }
  }
  serach=(keyword)=> {
    let filter1 = arr.filter((el, i) => { return el.title.toLowerCase().indexOf(keyword) > -1 })
    this.setState({ filtred1: filter1 })
  }
  serachRating=(rating)=> {
    let filter2 = arr.filter((el, i) => { return el.rating >= rating })
    this.setState({ filtred2: filter2 })
  }
  addNewMovie(newMovie) {
    arr.push(newMovie)
  }
  
  render() {
    return (<div className="App" >
      <Nav searchname={(keyword) => this.serach(keyword)} searchrating={(rating) => this.serachRating(rating)} />
      <Card  filtred2={this.state.filtred2} filtred1={this.state.filtred1}  onAddMovie={(newMovie) => this.addNewMovie(newMovie)} />/>
  
    </div>)
  }
}
export default App;
