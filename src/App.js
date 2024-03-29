import logo from './logo.svg';
import './App.css';

// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Abouts from './components/Abouts/Abouts';
import Friends from './components/Friends/Friends';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';
import PostDetails from './components/PostDetailse/PostDetails';

function App() {
  return (
    <div className="App">



      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/about">
            <Abouts></Abouts>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="/post/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route exact path="/about/culture">
            <Culture></Culture>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
