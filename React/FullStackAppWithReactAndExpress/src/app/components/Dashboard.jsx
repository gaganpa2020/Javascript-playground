import React from 'react';
import {connect} from 'react-redux';
import {ConnectTaskList} from "./TaskList";

export const Dashboard = ({groups}) => (
    <div>
        <h2>Dashboard</h2>
        {groups.map(group => (
            <div>
               <ConnectTaskList id={group.id} name={group.name}></ConnectTaskList>
            </div>
        ))}
    </div>
)

function mapStateToProps (state) {
    return {
        groups: state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);