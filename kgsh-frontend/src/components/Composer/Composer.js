import React, {Component} from 'react';

import ComposerWritebox from './ComposerWritebox';
import ComposerHeader from './ComposerHeader';
import ComposerFooter from './ComposerFooter';

class Composer extends Component {
    render(){
        return (
                <div className="composer">
                    <div className="composer-root">
                        <ComposerHeader/>
                        <div className="composer-writebox-root">
                            <ComposerWritebox/>
                            <ComposerFooter/>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Composer;