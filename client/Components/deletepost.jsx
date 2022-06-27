import React, { Component } from "react";
import axios from 'axios';

export default class DeletePost extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault();
        axios.delete(`http://localhost:3000/posts/${this.state.id}`)
        .then(response => {
            alert("Post deleted")
            window.location.href = '/deletepost';
        })
        .catch(error => {
            alert("An error occured")
        })
    }

    render(){
        const {id} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Post ID : </label>
                        <input type="text" name="id" value={id} onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit">Delete this post</button>
                </form>
            </div>
        );
    }
}