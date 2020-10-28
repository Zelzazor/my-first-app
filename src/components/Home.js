import React from "react";
import './css-components/Home.css';


const Home = (props)=> {
        const {title, onButtonClicked, count} = props;
        return (
            <div className="Home">
                <h1>Hello, {title /* is there a title? */  ? title : "stranger"}! This is my amazing home component, isn't it great?</h1>
                <p>Revolutionary... Like the iPhone! { count > 0 ? count : ""}</p>
                <button className="btnHome" onClick={onButtonClicked}>Click me!</button>
            </div>
        )
    }

export default Home;