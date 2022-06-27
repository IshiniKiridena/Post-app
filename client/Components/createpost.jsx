import React, { Component } from "react";
import axios from "axios";

export default class CreatePost extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            description:'',
            user:'',
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:3000/posts', this.state)
            .then(response => {
                alert("Post added");
                window.location.href = '/createposts';
            })
            .catch(error => {
                alert("An error occured")
            })
    }

    render(){
        const {title, description, user} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Title: </label>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <label>Desciption: </label>
                        <input type="text" name="description" value={description} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <label>User: </label>
                        <input type="text" name="user" value={user} onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit">Create Post</button>
                </form>
            </div>
        )
    }
}