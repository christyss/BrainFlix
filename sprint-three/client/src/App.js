import Header from './components/PageHeader/Header';
import Home from './pages/HomePage/Home';
import Upload from './pages/Upload/Upload';
import {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component{
  render(){
    return (
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/videos/:videoId" component={Home} />
            <Route path="/upload" component={Upload} />
          </Switch>
        </BrowserRouter>
      );
    }
  }


export default App;
