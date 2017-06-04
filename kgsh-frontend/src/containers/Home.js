import React, { Component } from 'react';
import { Header, UserBar, FriendsBar, Composer, Feed} from '../components';

class Home extends Component {
    render() {
        var indents = [];
        for (var i = 0; i < 25; i++) {
            indents.push(<Feed key={i}/>);
        }

    return (
      <div>
        <Header/>
        <div className="global-container">
          <div className="content _2ht">
            <div className="main-container">
              <div className="content-container">
                <div className="content-area">
                  <Composer/>
                  <div className="feeds">
                    {indents}
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

export default Home;