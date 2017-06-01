import React, {Component} from 'react';
import MediaImage from './../../assets/media.png';

class ComposerHeader extends Component {
    render(){
        return(
                      <div className="composer-header">
                        <span className="composer-header-menu">
                            <span display="inline">
                                <a className="header-padding">
                                    <span className="uiIconText">
                                        <div className="_5qtp">
                                            게시물 작성
                                        </div>
                                    </span>
                                    <span className="shape"></span>
                                </a>
                            </span>
                        </span>
                        <span className="composer-header-menu">
                          <span display="inline">
                            <a className="header-padding">
                              <span className="uiIconText">
                                <div className="_5qtp">
                                  사진 / 동영상 앨범
                                </div>
                              </span>
                            </a>
                          </span>
                        </span>
                      </div>
        );
    }
}

export default ComposerHeader;