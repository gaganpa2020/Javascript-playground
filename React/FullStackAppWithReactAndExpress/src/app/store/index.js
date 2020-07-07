import {createStore, applyMiddleware, combineReducers} from 'redux';
import {defaultState} from '../../server/defaultState';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

import * as sagas from './saga.mock';
import * as mutations from "./mutation";

export  const store = createStore(
    combineReducers({
        tasks(tasks= defaultState.tasks, action){
            switch(action.type){
                case mutations.CREATE_TASK:
                    //console.log(action);
                    return [...tasks, {
                        id: action.taskID,
                        name:"New  Task",
                        group: action.groupID,
                        owner: action.ownerID,
                        isComplete: false
                    }]
            }

            return tasks;
        },
        comments(comments = defaultState.comments, action){
            return comments;
        },
        users(users = defaultState.users, action){
            return users;
        },
        groups(groups = defaultState.groups, action){
            return groups;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
)

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}