import React from 'react';
import {connect} from 'react-redux';
import {requestTaskCreation} from '../store/mutation';
import Link from "react-router-dom/Link";

export const TaskList = ({tasks, name, id, createNewTask}) => (
    <>
        <h3>name</h3>
        <div>
            {tasks.map(
                task => (
                    <Link to={`/task/${task.id}`} key={task.id}>
                    <div >{task.name}</div>
                    </Link>
                )
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