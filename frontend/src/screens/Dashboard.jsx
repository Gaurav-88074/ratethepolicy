import React from 'react'
import classes from "./Dashboard.module.css";
import { BiUpvote } from "react-icons/bi";
import Feed from '../components/Feed';
import UserPanel from '../components/UserPanel';
import Extras from '../components/Extras';
const Dashboard = () => {
  return (
    //note:
    //this is how we use css in our project
    <div className={classes.dashboard}>
      <UserPanel/>
      <Feed/>
      <Extras/>
    </div>
  )
}

export default Dashboard