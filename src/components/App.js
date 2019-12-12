import React, { Component } from "react";
import axios from "axios";
import Posts from "./Posts";
import Gallery from "./Gallery";
import Header from "./Header";
import { API_URL } from "../constants";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      photos: [],
      popupPhoto: ""
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
        this.setState({ photos: res.data });
      })
      .catch(err => {
        console.error("Error in =>", err);
      });
  }

  openPhoto = photoUrl => {
    console.log(photoUrl);
    this.setState({ popupPhoto: photoUrl });
  }

  closePhoto = () => {
    this.setState({ popupPhoto: '' });
  }

  componentDidMount() {
    this.fetchPosts();
    this.fetchPhotos();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/semos-react-h4/"
            render={() => {
              return <Posts postslist={this.state.posts} />
            }}
          />
          <Route path="/semos-react-h4/gallery" render={() => {
            return (
              <Gallery
                openPhoto={this.openPhoto}
                photoslist={this.state.photos}
                popupPhoto={this.state.popupPhoto}
                closePhoto={this.closePhoto}
              />
            );
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
