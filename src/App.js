import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import Upload from './components/Upload/Upload';
import {Component} from 'react';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';

class App extends Component{
  render(){
    return (
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/upload" component={Upload} />
          </Switch>
        </BrowserRouter>
      );
    }
  }


export default App;
