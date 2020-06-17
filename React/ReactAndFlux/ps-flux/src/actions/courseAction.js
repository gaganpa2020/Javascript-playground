import dispatcher from "../appDispatcher";
import * as courseApi from '../api/courseApi';
import actionType  from "./actionTypes";
import actionTypes from "./actionTypes";

export function saveCourse(course){
    return courseApi.saveCourse(course).then(savedCourse => {
        // Hey dispatcher, go tell all the stores that a course was just created. 
        dispatcher.dispatch({
            actionType: course.id ? actionTypes.UPDATE_COURSE : actionType.CREATE_COURSE,
            course: savedCourse
        });
    });
}

export function loadCourses(course){
    return courseApi.getCourses().then(courses => {
        dispatcher.dispatch({
            actionType: actionType.LOAD_COURSE,
            course: courses
        });
    });
}