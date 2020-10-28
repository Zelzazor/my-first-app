import React, {Component} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import './App.css';

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      count: 0,
    };
  }

  onClickBtn = () => {
    this.setState({
      count: this.state.count + 1
    });
  }


  render(){
    const {count}=this.state;
    return (
      <div>
        <Header/>
        <Home title="man" onButtonClicked={this.onClickBtn} count={count}/>
      </div>
    )
  }
}
