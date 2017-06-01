import React, {Component} from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuData : [
                {menuName : "로그인", className : "signin"},
                {menuName : "회원가입", className : "singup"}
            ]
        }
    }
    render(){
        return (
            <ul className="nav">
                {this.state.menuData.map((menu)=>{
                    return (
                        <MenuItem className={menu.className} name={menu.menuName}/>
                    );
                })}
            </ul>
        );
    }
}

class MenuItem extends Component {
    render(){
        return (
            <li><a className={this.props.className}>{this.props.name}</a></li>
        );
    }
}

export default Menu;