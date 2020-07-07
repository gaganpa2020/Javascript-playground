import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';
import {ConnectedDashboard} from './Dashboard';
import {Router, Route} from 'react-router-dom';
import {history} from "../store/history";
import {ConnectedNavigation} from "./navigation";
import {ConnectedTaskDetail} from './TaskDetails';

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation></ConnectedNavigation>
                <Route exact path="/dashboard" render={()=>(<ConnectedDashboard/>)} />
                <Route exact path="/task/:id"
                       render={({match})=>(<ConnectedTaskDetail match={match}></ConnectedTaskDetail>)}></Route>
            </div>
        </Provider>
    </Router>
)


