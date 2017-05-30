import React, {Component} from 'react';
import Menu from './Menu';

class Header extends Component {
    render(){
        return(
            <div className="header-wrapper">
                <div className="header">
                    <Menu/>
                </div>
            </div>
        );
    }
}

export default Header;