import React from 'react';
import {connect} from 'react-redux';
import {requestTaskCreation} from '../store/mutation';
import Link from "react-router-dom/Link";

export const TaskList = ({tasks, name, id, createNewTask}) => (
    <div className="card p-2 m-2">
        <h3>{name}</h3>
        <div>
            {tasks.map(
                task => (
                    <Link to={`/task/${task.id}`} key={task.id}>
                    <div className="card p-2 mt-2">{task.name}</div>
                    </Link>
                )
            )}
        </div>
        <button onClick={()=>createNewTask(id)} className="btn btn-primary btn-block mt-2">Add New</button>
    </div>
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