import React, { Component } from 'react';

import { Header, UserBar, FriendsBar, Composer } from '../components';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="global-container">
          <div className="content _2ht">
            <div className="main-container">
              <div className="content-container">
                <div className="content-area">
                  <Composer/>
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