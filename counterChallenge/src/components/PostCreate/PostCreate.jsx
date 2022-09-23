import React from "react";
import './PostCreate.css';
import BlogPostModel from "../../models/blogPostModel";

export default function PostCreate(){

    return (
        <div className="PostCreate">
            <form className="PostCreateForm">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />

                <label htmlFor="image">Image</label>
                <input type="text" name="image" id="image" />

                <label htmlFor="text">Text</label>
                <textarea name="text" id="text" cols="30" rows="10"></textarea>
            </form>
        </div>
    )
}