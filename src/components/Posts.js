import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentDidMount = () => {
    this.props.fetchData("1");
  };

  render() {
    return (
      <div className="text-left">
        <h1> Posts </h1>
        <hr />
        {this.props.posts.map(post => {
          return <Post key={post.id} title={post.title} body={post.body} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts || []
});

const mapDispatchToProps = dispatch => ({
  fetchData: id => {
    dispatch(fetchPosts(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
