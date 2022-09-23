import React from "react";
import BlogPostModel from "../../models/blogPostModel";
import BlogPost from "../BlogPost";
import PostCreate from "../PostCreate";

function BlogPage() {
    const postsList = [];

    postsList.push();

    return (
        <div className="postsList">
            <PostCreate />

            {postsList.map((item, i) => {
                <BlogPost key={i} post={item}/>
            })}
        </div>
    )
}

export default BlogPage;