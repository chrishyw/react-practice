import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
// import $ from "jquery"
// import Popper from "popper.js"
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Notification from "./Component/notification"
import Form from "./Component/form";

import fire from "./Component/fire";

import Chart from "./Component/Chart"

class App extends Component {

  constructor(){
    console.log("more test from test!");
    //more stuff!
    super();
    this.state = {
      searchResult: "",
      data: null,
      ready: false,
      userInfo: {
        email: "",
        password: "",
        info: {
          address: null,
          zip: null,
          city: null,
          stuff: {
            innerStuff: "for deep copy"
          }
        }
      },
      email: "",
      password: "",
      user: null,
      notification: "",
      error: false,
      test: "test_variable!"
    }
    let test_variable = "test_variable!";
    this.loginInfo = {email: "", password: ""};
    this.searchResult = "";
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user, error: false });
      } else {
        this.setState({ user: null });
      }
    });
  }

  login = (e) => {
    e.preventDefault();
    // let info = this.loginInfo;
    this.setState({email: this.loginInfo.email, password: this.loginInfo.password});
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((user)=>{
      console.log(user);
    })
    .catch((error) => {
      this.setState({
        notification: error.message,
        error: true
      });
      console.log(error);
    });
  }

  signup = (e) => {
    e.preventDefault();
    this.setState({email: this.loginInfo.email, password: this.loginInfo.password});
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((u)=>{
      console.log(u)
    })
    .catch((error) => {
      this.setState({
        notification: error.message,
        error: true
      });
      console.log(error);
    })
  }

  signout = () => {
    fire.auth().signOut();
  }

  componentDidMount(){
    this.authListener();

    // let url = "https://reqres.in/api/users?page=2";
    
    // $.ajax({
    //   url: url,
    //   type: "GET",
    //   success: (data)=>{
    //     this.setState({
    //       data: data,
    //       ready: true
    //     });
    //   },
    //   error: (xhr, status, err)=>{
    //     console.log(err);
    //   }
    // });
  }

  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps", props, state);
    return {test: "derived!", derivedState: true};
  } 
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  showData = () => {

    let newUser = {
      email: "hue@gmail.com",
      password: "111",
      info: {
        address: "wow st.",
        zip: "99999",
        city: "kimchi city",
        stuff: {
          innerStuff: "test"
        }
      }
    }

    let user = {...this.state.userInfo,
      email:newUser.email,
      password: newUser.password,
      info: {
        ...this.state.userInfo.info,
        address: newUser.info.address
      }
    };

    // console.log("this.state.userInfo",{...this.state.userInfo}); // it does deep copy!

    // spread operator creates a copy of this.state immutably. (validate using ===)
    let userInfo = {...this.state.userInfo,
      ...newUser
    };

    this.setState({userInfo});

    // this.state.data ? this.state.data.data.map((el, index)=>{
    //   console.log(`${el.first_name} ${el.last_name}, ${index}`);
    // }) : "";
    // fire.database().ref("/users").once("value").then((snapShot)=>{
    //   console.log(snapShot.val());
    // });
    
  }

  closeNotification = (data) => {
    // $(".alert").alert("close");
    this.setState({error: false, notification: ""});
    console.log(data);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
  }

  handleChanged = (e, value) => {
    console.log("e.target.name: "+[e.target.name], "value: "+value);
    // this.setState({[e.target.name]: e.target.value});
    e.target.name === "email" ? this.loginInfo.email = e.target.value : this.loginInfo.password = e.target.value;
    console.log(this.loginInfo);
  }

  handleCheckBoxChange = (e, returnedValue) => {
    console.log("checkbox value: "+ e.target.checked, ", returned: "+ returnedValue);
  }

  handleSearchBar = (e) => {
    this.searchResult = e.target.value;
    console.log(this.searchResult);
  }

  formSubmit = (e) => {
    console.log("test");
    e.preventDefault();
    this.setState({searchResult: this.searchResult});
    this.searchResult.trim().length > 1 ? alert("form submitted!") : alert("empty input or not long enough!");
  }

  render() {
    console.log("render from main");
    // let data = this.state.ready ? this.state.data.data.map((el)=>{return el.first_name + " " + el.last_name}) : ["No Data."]; // else statement has to be array, otherwise .join() will fail.
    let loginStatus = this.state.user ? <div style={{position: "absolute", top: "5px", right: "5px"}} ><p>{this.state.user.email}</p><button className="btn btn-danger" onClick={this.signout}>Logout</button></div> : "Please log in.";
    let notification = this.state.error ? <Notification type="error" info={this.state.notification} closeBtnClicked={this.closeNotification} /> : null;
    let form = !this.state.user ? <Form formSubmit={this.login} handleChange={this.handleChanged} handleCheckBox={this.handleCheckBoxChange} signupBtn={this.signup} /> : null;
    let status = this.state.user ? <div><Notification type="notification" info={this.state.user.email} closeBtnClicked={this.closeNotification} /></div> : null
    let searchForm = this.state.user ? <form onSubmit={this.formSubmit}>
          <input placeholder="Search..." style={{marginTop: "15px"}} className="form-control" onChange={this.handleSearchBar} />
        </form> : null;

    let pieData = [["Blueberry", 44], ["Strawberry", 23], ["Apple", 14], ["Grapes", 56]];
    let lineData = {"2017-05-13": 2, "2017-05-14": 5, "2017-05-15": 1, "2017-05-16": 9, "2017-05-17": 8};
    let testData = {...lineData}
    // console.log(Object.keys(testData).map((el)=>lineData[el]));
    // console.log(...pieData[0], testData);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        {status}

        {notification}

        {loginStatus}

        {searchForm}

        {form}

        <Chart chartType="pie"/>
        <Chart chartType="line"/>

        <div>
        <button className="btn btn-primary" onClick={this.showData}>Show Data</button>
        </div>
        <p>innerStuff: {this.state.userInfo.info.stuff.innerStuff}</p>
        
        <p>{process.env.REACT_APP_HA}</p>
      </div>
    );
  }
}

export default App;
