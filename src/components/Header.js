import React, {Component} from 'react';
import './css-components/Header.css'
import react from './img/react.svg';

export default class Header extends Component {
    render(){
        return(
        <nav className="navBar">
            <div className="buttons">
                <button className="btn" id="btnHome">Home</button>
                <button className="btn" id="btnAbout">About</button>
                <button className="btn" id="btnContact">Contact</button>
            </div>
            <div className="icon">
                <img src={react} alt="react img"/>
            </div>
        </nav>
        );
    }
}