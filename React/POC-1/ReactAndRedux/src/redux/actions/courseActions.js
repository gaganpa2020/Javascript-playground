export function createCourse(course) {
  return { type: "CREATE_COURSE", course }; // Same as return { type: "CREATE_COURSE", course: course };
}
