import React from 'react'
import '../../App.css';
import Navbar from '../Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Home () {
    return (
        <>
        <Router>
            
            <Navbar/>
            <Switch>
                <Route path ="/" exact component = {Home}/>
            </Switch>
        </Router>
        </>
    )
}


export default Home;