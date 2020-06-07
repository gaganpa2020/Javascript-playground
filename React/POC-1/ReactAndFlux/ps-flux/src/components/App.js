import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {


    
  return (
    <div className="container-fluid">
      <Header />      
      <Switch>
        <Route path="/" exact component={HomePage} />>
        <Route path="/courses" component={CoursesPage} />>
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Redirect from='/about-from' to="/about"></Redirect>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
