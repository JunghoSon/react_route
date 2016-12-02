import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    <li><Link to="Home">Home</Link></li>
                    <li><Link to="About">About</Link></li>
                    <li><Link to="Articles">Articles</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;
