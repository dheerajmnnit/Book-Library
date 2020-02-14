import React from 'react';
import Sidebar from './Components/Common/sidebar';
const App = (props) => {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <div className="row">
          {props.children}
        </div>
      </div>

    </div>
  );
}

export default App;
