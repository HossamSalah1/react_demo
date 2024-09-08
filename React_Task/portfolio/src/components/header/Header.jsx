import { Component } from "react";
import './Header.css'

export default class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return <><div id="home" className="header">
            <div className="text">
                <h1>Hossam Salah Hassan</h1>
                <h2>Software Developer</h2>
            </div>

        </div>
        </>
    }
}