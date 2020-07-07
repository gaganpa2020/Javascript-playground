import React from 'react';
import {connect} from 'react-redux';
import {requestTaskCreation} from '../store/mutation';

export const TaskList = ({tasks, name, id, createNewTask}) => (
    <>
        <h3>name</h3>
        <div>
            {tasks.map(
                task => (<div key={task.id}>{task.name}</div>)
            )}
        </div>
        <button onClick={()=>createNewTask(id)}>Add New</button>
    </>
)

const mapStateToProps = (state, ownProps) => {
    let groupID = ownProps.id;
    return {
        name: ownProps.name,
        id:groupID,
        tasks: state.tasks.filter(task=>task.group === groupID)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNewTask(id){
            console.log("Create new task...", id);
            dispatch(requestTaskCreation(id));
        }
    }
}

export const ConnectTaskList = connect(mapStateToProps,mapDispatchToProps)(TaskList);