import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Chat from './folder/Chat';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
