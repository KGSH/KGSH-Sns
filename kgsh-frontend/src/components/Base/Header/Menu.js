import React, {Component} from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuData : [
                {menuName : "Login"},
                {menuName : "Sign up"}
            ]
        }
    }
    render(){
        return (
            <ul className="nav">
                {this.state.menuData.map((menu, i)=>{
                    return (
                        <MenuItem name={menu.menuName}/>
                    );
                })}
            </ul>
        );
    }
}

class MenuItem extends Component {
    render(){
        return (
            <li><a>{this.props.name}</a></li>
        );
    }
}

export default Menu;