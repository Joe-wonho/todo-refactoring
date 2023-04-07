import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';

import useFetch from './util/useFetch';
import { useSelector } from 'react-redux';

function App() {
  // const [todos, isPending, error] = useFetch('http://localhost:3001/todos');
  const todos = useFetch('http://localhost:3001/todos');
  // const initailTodos = useSelector();

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
