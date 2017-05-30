import React, { Component } from 'react';
import { Header, UserBar, FriendsBar } from '../components';
import MediaImage from './assets/media.png';
import DefaultProfile from './assets/default.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="global-container">
          <div className="content _2ht">
            <div className="main-container">
              <UserBar/>
              <div className="content-container">
                <FriendsBar/>
                <div className="content-area">
                  <div className="composer">
                    <div className="_3u15">
                    </div>
                    <div className="composer-root">
                      <div className="_3ubp _sg2">
                        <span className="_sg1">
                          <a className="_4-h7">
                            <span className="_4-fs">
                              <span className="_5qtp">
                                <em className="_4qba">게시물 작성</em>
                              </span>
                              <span className="_4-h8">
                              </span>
                            </span>
                          </a>
                        </span>
                        <span className="_sg1">
                          <span display="inline">
                            <a className="_4sv0 _4-h7 _m">
                              <span className="uiIconText">
                                <img src={MediaImage}>

                                </img>
                                <div className="_5qtp">
                                  사진 / 동영상 앨범
                                </div>
                              </span>
                              <span></span>
                            </a>
                          </span>
                        </span>
                      </div>
                      <div className="_4zoz _5xv3 _4cw">
                        <div className="_m">
                          <div className="clearfix">
                            <div className="_q-v _4b17">
                              <img className="profile-image" src={DefaultProfile}></img>
                            </div>
                            <div className="_4b19">
                              <div className="_m">
                                <div className="composer-text-input-box">
                                  <textarea spellCheck='false' className="composer-field" placeholder="게시글을 입력해 주세요">
                                  </textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_16ve">
                          <div className="_16vf"></div>
                          <div className="_16vg">
                            <div className="_5xmp">
                              <div className="composer-push">
                                <div className="composer-push-tag">올리기</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;