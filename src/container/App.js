import React, {Component, useEffect, useState} from "react";
import CardList from '../component/CardList';
import { robots } from '../robots';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll'


const App = () => {
  const [robots, setRobots] = useState ([]);
  const [searchfield, setSearchfield] = useState('');
// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       robots: robots,
//       searchfield: ''
//     }
//   }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));  
  }, [])
  // componentDidMount(){
  //       
  // }

  const onSearchChange = (e) => {
    setSearchfield(e.target.value)
  }
  const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })
    if (robots.length === 0){
      return <h1 className="tc">Loading</h1>
    }
    else {
      return(
        <div className="tc ">
          <h1 className="f2">Faisal RobotsFamily</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filterRobots}/>
          </Scroll>         
        </div>  
      );
    }
  }

export default App;