import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Services from './components/services/services.component';
import Portfolio from './components/portfolio/portfolio.component';

class App extends React.Component {
  render() {
    return (
        <div>
            <Header/>
            <Services/>
            <Portfolio/>
        </div>
    );
  }
}

export default App;
