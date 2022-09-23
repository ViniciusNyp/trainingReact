import React, {useState} from "react";
import './BlogPost.css';


function BlogPost(props) {
    const post = props.post;

    const [counter, setCounter] = useState(0);

    function handleShareClick() {
        setCounter(counter + 1);
    }

    return (
        <article className="blogPost">
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} />
            <p>{post.text}</p>
            <button className="share" onClick={handleShareClick}>
                Share
            </button>
            <div>{counter}</div>
        </article>
    );
}

export default BlogPost;