import React from 'react';
import classes from './Post.module.css';
import { FaHeart } from "react-icons/fa6";
import { MdComment } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { useState } from 'react';
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
const Post = (props) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };
    return (
        <div className={classes.post}>
            <header className={classes.header}>
                
            </header>
            <main className={classes.main}></main>
            <footer className={classes.footer}>
                <MdRemoveRedEye />10K
                <FaHeart 
                    size={18} 
                    onClick={toggleLike} 
                    color={liked?'red':'white'} 
                /> Like
                <BiUpvote 
                    size={18} 
                />Upvote
                <BiDownvote 
                    size={18} 
                />Downvote
                <MdComment
                    size={18} 
                />Comment
            </footer>
        </div>
    )
}

export default Post