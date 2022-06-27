import React, { Component } from "react";

export default class ViewOnePost extends Component{
    constructor(props) {
        super(props)

        this.state = {
            id:''
        }

        this.post = {
            id:'',
            title:'',
            description:'',
            user:'',
            posted:'',
            DataisLoaded: false
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        console.log('-----------Called ----------------')
        e.preventDefault();
        fetch(`http://localhost:3000/posts/${this.state.id}`)
            .then((res) =>  res.json())
            .then((json) => {
                this.post.id = json.id
                this.post.title = json.title
                this.post.description = json.description
                this.post.user = json.user
                this.post.posted = json.posted
                this.post.DataisLoaded = true
            })
        console.log(this.post)
        
    }

    mountPost(title, description, user, posted){
        return (<div>
            <h1>Post Data</h1>
            <ul>
                <li>Title : {title}</li>
                <li>Desciption : {description}</li>
                <li>User : {user}</li>
                <li>Posted Date : {posted}</li>
            </ul>
        </div>)
    }

    render(){
        const {id} = this.state
        const post = this.mountPost(this.post.title, this.post.description, this.post.user, this.post.posted);

        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>Id : </label>
                    <input type="text" name="id" value={id} onChange={this.changeHandler}></input>
                    <button type="submit">View Post</button>
                </form>
                <div>{post}</div> 
            </div>
        );
    }
}