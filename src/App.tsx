// import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Article from './components/Article';
import Home from './components/Home';
import Post from './components/Post';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/counter' element={<Counter />} /> */}
          <Route path='/posts/:id' element={<Article />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
