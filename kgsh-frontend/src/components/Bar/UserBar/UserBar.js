import React, {Component} from 'react';
import defaultThumbnail from './../../../assets/default-thumbnail.png';

class UserBar extends Component {
    render(){
        return(
            <div className="left-con">
                <img className="user-profile-image" src={defaultThumbnail}></img>
            </div>
        );
    }
}

export default UserBar;