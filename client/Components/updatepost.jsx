import React, { Component } from "react";
import axios from 'axios';

export default class UpdatePost extends Component{
    constructor(props){
        super(props)

        this.state = {
            id:'',
            title:'',
            description:'',
            user:'',
            posted:'',        
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        this.sendState = {
            title: this.state.title,
            description: this.state.description,
            user: this.state.user,
        }
        axios.put(`http://localhost:3000/posts/${this.state.id}`, this.sendState)
            .then(respone => {
                console.log(respone);
                alert('Post updated');
                window.location.href = '/update';

            })
            .catch(error => {
                console.log(error);
                alert('An error occured');
            })
    }

    render() {
        const { id,title,description,user,posted } = this.setState
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>ID  :</label>
                        <input type='text' name='id' value={id} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <label>Title  :</label>
                        <input type='text' name='title' value={title} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <label>Desciption  :</label>
                        <input type='text' name='description' value={description} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <label>User  :</label>
                        <input type='text' name='user' value={user} onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit">Update post</button>
                </form>
            </div>
        );
    }
}