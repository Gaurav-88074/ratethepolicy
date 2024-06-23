import React from 'react';
import classes from './Feed.module.css';
import Post from './Post';
const Feed = () => {
  return (
    <div className={classes.feed}>
      <header className={classes.header}>
        Feed
      </header>
      <main className={classes.postSection}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </main>
    </div>
  )
}

export default Feed