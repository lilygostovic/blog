import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

// importing components
import Home from './pages/Home';
import Travel from './pages/Travel';
import Write from './pages/Write';
import Photography from './pages/Photography';
import Film from './pages/Film';
import Video from './pages/Video';
import Music from './pages/Music';
import BlogPost from './pages/BlogPost';


function App() {
  return (
    <BrowserRouter>

      <Switch>
    
        <Route path="/" component={Home} exact/>

        <Route path="/travel" component={Travel}/>

        <Route path="/write" component={Write}/>

        <Route path="/photography" component={Photography}/>

        <Route path="/film" component={Film}/>

        <Route path="/video" component={Video}/>

        <Route path="/music" component={Music}/>

        <Route path="/blog-post/:id" component={BlogPost}/>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
