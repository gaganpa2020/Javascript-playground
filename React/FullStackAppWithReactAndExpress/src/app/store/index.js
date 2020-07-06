import {createStore} from 'redux';
import {defaultState} from '../../server/defaultState';

export  const store = createStore(
    function (state=defaultState,acction){
        return state;
    }
)