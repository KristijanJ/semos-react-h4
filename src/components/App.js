import React, { Component } from "react";
import axios from "axios";
import Posts from "./Posts";
import Gallery from "./Gallery";
import { API_URL } from "../constants";
import { Route, Switch, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      photos: []
    };
  }

  fetchPosts = () => {
    axios
      .get(API_URL + "/posts")
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => {
        console.error("Error in =>", err);
      });
  };

  fetchPhotos = () => {
    axios
      .get(API_URL + "/photos")
      .then(res => {
        let first10Photos = res.data.slice(0, 10);
        this.setState({ photos: first10Photos });
      })
      .catch(err => {
        console.error("Error in =>", err);
      });
  }

  componentDidMount() {
    this.fetchPosts();
    this.fetchPhotos();
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Posts postslist={this.state.posts} />
            }}
          />
          <Route path="/gallery" render={() => {
            return <Gallery photoslist={this.state.photos} />
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
