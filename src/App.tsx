// import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Article from './components/Article';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts/:id' element={<Article />} />
          {/* <Route path='/genre/:id' element={<Posts />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
