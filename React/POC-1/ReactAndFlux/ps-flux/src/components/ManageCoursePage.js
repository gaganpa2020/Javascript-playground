import React from 'react';

const ManageCoursePage = props => {
    return (
    <>
        <h2>Manage Courses</h2>        
        {props.match.params.slug}
    </>
    );
};

export default ManageCoursePage;