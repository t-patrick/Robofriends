import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import ErrorBoundary from './ErrorBoundary'


class App extends React.Component {

constructor() {
  super();
  this.state = {
    robots: [],
    searchField: '',
  }
  this.forceLoadingScreen = false;
}

componentDidMount() {
     fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      console.log(users);
      this.setState({ robots: users })
    });

  }

onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });

    if (event.target.value === 'gotoloading') {
      this.forceLoadingScreen = true;
    }

}


// One observation I have on this, is that the render() method must be rerun when the state changes.
// Another is the idea that any state change must deal with it's intermediate operations before the return. Unless you directly implement it there.

// // //  My different Contexts:
// 1. Loading
renderLoading = () => {
  return (<h1 className="title">Loading</h1>);
}


// 2. Main Screen
// ErrorBoundary 
appLoaded = (filtered) => {
  return (<div className="tc">
  <h1 className="title">Robofriends</h1>
  <SearchBox searchChange={this.onSearchChange}/>
  <Scroll>
    <ErrorBoundary> 
      <CardList robots={filtered}/>
    </ErrorBoundary>
  </Scroll>
</div>);
}

  render() {
    const filtered = this.state.robots.filter((robot) => {
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    if(this.state.robots.length < 5 || this.forceLoadingScreen === true) {

      return this.renderLoading();
    } else {

    return this.appLoaded(filtered);
    }
  }


}

export default App;
