import Header from './components/PageHeader/PageHeader';
import Home from './pages/HomePage/HomePage';
import Upload from './pages/UploadPage/UploadPage';
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
            <Route path="/upload" render={(props) => <Upload {...props} />} />
          </Switch>
        </BrowserRouter>
      );
    }
  }


export default App;
