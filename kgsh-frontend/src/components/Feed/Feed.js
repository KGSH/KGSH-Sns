import React, { Component } from 'react';
import DefaultProfile from './../../assets/default.jpg';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRemoving : false,
            isEdit : false,
        }
    }
    render() {
        return (
            <div className="feed">
                <div className="feed-container">
                    <div className="feed-contents">
                        <div>
                            <div className="feed-writer">
                                <a className="feed-writer-info">
                                    <img className="feed-writer-image" src={DefaultProfile}></img>
                                </a>
                                <div className="feed-writer-name">
                                    <div>
                                        <div className="name">
                                            <span>
                                                <a>
                                                    윤준서
                                                </a>
                                            </span>
                                        </div>
                                        <div className="time">
                                            <span>
                                                <a>
                                                    1분
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="feed-post">
                                <p>
                                    ㅋㅋㅋㅋㅋㅋ
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="feed-comments">

                    </div>
                </div>
            </div>
        );
    }
}

export default Feed;