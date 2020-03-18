import React from 'react';
import ReactDOM from 'react-dom';
import './components/counter/counter.scss'
import './components/header/header.scss'
import './components/footer/footer.scss'


import App from './app.js';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
