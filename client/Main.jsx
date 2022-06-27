import React, { Component } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import CreatePost from "./Components/createpost";
import ViewPosts from "./Components/viewposts";
import DeletePost from "./Components/deletepost";
import ViewOnePost from "./Components/viewone";
import UpdatePost from "./Components/updatepost";

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter>
                <nav>
                    <Link to='/viewposts'>View all posts</Link>
                    <div></div>
                    <Link to='/createposts'>Create new post</Link>
                    <div></div>
                    <Link to='/deletepost'>Delete Post</Link>
                    <div></div>
                    <Link to='/viewone'>View one Post</Link>
                    <div></div>
                    <Link to='/update'>Update post</Link>
                </nav>
                <Routes>
                    <Route path='/viewposts' element={<ViewPosts />} />
                    <Route path='/createposts' element={<CreatePost/>}></Route>
                    <Route path='/deletepost' element={<DeletePost />}></Route>
                    <Route path='/viewone' element={<ViewOnePost />}></Route>
                    <Route path='/update' element={<UpdatePost />}></Route>

                </Routes>
            </BrowserRouter>
        );
    }
}