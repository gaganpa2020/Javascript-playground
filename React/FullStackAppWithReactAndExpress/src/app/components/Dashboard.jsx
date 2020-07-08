import React from 'react';
import {connect} from 'react-redux';
import {ConnectTaskList} from "./TaskList";

export const Dashboard = ({groups}) => (
    <div className="row">
        {groups.map(group => (
            <div key={group.id}>
            <ConnectTaskList key={group.id} id={group.id} name={group.name} className="col"></ConnectTaskList>
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