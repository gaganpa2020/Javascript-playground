import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';
import {ConnectedDashboard} from './Dashboard';
import {ConnectedLogin} from './login';
import {Router, Route} from 'react-router-dom';
import {history} from "../store/history";
import {ConnectedNavigation} from "./navigation";
import {ConnectedTaskDetail} from './TaskDetails';
import {Redirect} from "react-router-dom";

const RouteGuard = Component => ({match})=>{
    if(!store.getState().session.authenticated){
        return <Redirect to="/"/>
    }else {
        return <Component match={match}></Component>
    }
}

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation></ConnectedNavigation>
                <Route exact path="/" component={ConnectedLogin} />
                <Route exact path="/dashboard" render={RouteGuard(ConnectedDashboard)} />
                <Route exact path="/task/:id" render={RouteGuard(ConnectedTaskDetail)}/>
            </div>
        </Provider>
    </Router>
)


