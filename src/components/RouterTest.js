import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Form from "./Form";
import Life from "./Life";


const Home = () => <div>Home</div> ;
const AddJob = ({ match }) => <div>Add Job #{match.params.id}</div>;
const Page404 = () => <div>Page 404</div>
class RouterTest extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link class="top-nav" to="/">Homer</Link></li>
          <li>
            <Link class="top-nav" to="/life-in-different-countries">Life in different countries</Link></li>
          <li>
            <Link class="top-nav" to="/add-job/1">Add Job</Link></li>
          <li>
            <Link class="top-nav" to="/add-job/2">Add Job 2</Link></li>
            <li>
            <Link class="top-nav" to="/login">Login</Link></li>
        </ul>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/life-in-different-countries" component={Life}/>
        <Route path="/add-job/:id" component={AddJob}/>
        <Route path="/login" component={Form}/>
        <Route component={Page404}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default RouterTest;
