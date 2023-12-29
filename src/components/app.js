

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         react
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component, PropTypes } from 'react';
import Counter from './counter';

const propTypes = {

};

const defaultProps = {

};

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Counter/>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;