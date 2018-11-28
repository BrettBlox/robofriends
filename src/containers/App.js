import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "../App.css";
import Scroll from "../components/Scroll.js";

class App extends Component {
  state = {
    robots: [],
    searchfield: ""
  };

  async componentDidMount() {
    let robots = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await robots.json();
    this.setState({ ...this.state.robots, robots: json });
  }

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
