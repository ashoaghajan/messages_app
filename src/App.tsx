import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ListMessages from './views/ListMessages';
import Colors from './views/Colors';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ListMessages} />
          <Route path='/colors' component={Colors}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
