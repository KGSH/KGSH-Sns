import React, {Component} from 'react';

import DefaultProfile from './../../assets/default.jpg';

class ComposerWritebox extends Component {
    render(){
        return(
            <div className="composer-writebox">
                <div className="clearfix">
                    <div className="_q-v _4b17">
                        <img className="profile-image" src={DefaultProfile}></img>
                    </div>
                    <div className="_4b19">
                        <div>
                            <div className="composer-text-input-box">
                                <textarea spellCheck='false' className="composer-field" placeholder="게시글을 입력해 주세요">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComposerWritebox;