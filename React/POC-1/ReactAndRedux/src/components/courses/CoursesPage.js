import React from "react";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: "",
      },
    };
  }

  handleClick = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course }); // This is equivalent to this.setState({ course: course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Course</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleClick}
          value={this.state.course.title}
        ></input>

        <input type="submit" value="Save"></input>
      </form>
    );
  }
}

export default CoursesPage;
