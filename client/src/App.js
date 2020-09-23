import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Aside from './Components/Aside/Aside';
import Main from './Components/Main';
import About from './Components/About';
import Coveralls from './Components/Coveralls';
import Error404 from './Components/Error404';
import Calendar from './Components/Calendar/Calendar';
import ContentHeader from './Components/ContentHeader/ContentHeader';
import IncidentsContainer from './Components/Incidents/IncidentsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';
import * as firebase from 'firebase';


export default class App extends Component {
    componentDidMount(){
        const db = firebase.database();
        console.log(db);
    }
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Aside/>
                <div className="content-wrapper">
                    <ContentHeader/>
                    <Switch>
                        <Route exact path="/" render={() => <Main/>}/>
                        <Route exact path="/about" render={() => <About/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route exact path="/coveralls" render={() => <Coveralls/>}/>
                        <Route exact path="/calendar" render={() => <Calendar/>}/>
                        <Route exact path="/incidents" render={() => <IncidentsContainer/>}/>
                        <Route exact path="/users" render={() => <UsersContainer/>}/>
                        <Route render={() => <Error404/>}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}
