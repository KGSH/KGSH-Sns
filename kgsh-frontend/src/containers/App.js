import React, { Component } from 'react';
import { Header, UserBar, FriendsBar } from '../components';

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
                  <h1>HAHAHAHAHAHAH</h1>
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