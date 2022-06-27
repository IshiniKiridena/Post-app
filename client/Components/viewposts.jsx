import React, { Component } from "react";
import Link from 'react-router-dom';

export default class ViewPosts extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts:[],
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:3000/posts')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    posts: json
                })
            })
    }

    render(){
        const {posts} = this.state;
        return(
            <div className="App">
                <h1>Posts</h1>
                {
                    posts.map((postList) => (
                        <ul key={postList.id}>
                            <li>ID : {postList.id}</li>
                            <li>Title : {postList.title}</li>
                            <li>Desciption : {postList.description}</li>
                            <li>User : {postList.user}</li>
                            <li>Date : {postList.posted}</li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}