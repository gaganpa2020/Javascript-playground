import * as types from "./actionTypes";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course }; // Same as return { type: "CREATE_COURSE", course: course };
}
