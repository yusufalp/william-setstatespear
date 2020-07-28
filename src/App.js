import React, { Component } from 'react';
import PoemListPage from './PoemListPage'
import PoemPage from './PoemPage'
import { Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          {/* <a href='/'>Poem List</a> */}
          <Link to='/'>Poem List</Link>
        </nav>
        <header>
          <h1>William Setstatespear</h1>
        </header>
        <main>
          <Route
             exact path='/'
             component={PoemListPage}
           />
           <Route
              path='/poem/:poemId'
              component={PoemPage}
           />
        </main>
        <footer>
          <p>© WilliamSetstatespear, 2018. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
