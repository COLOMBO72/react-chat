import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import Chat from './folder/Chat/Chat';
import React from 'react';
import Login from './folder/Authorization/Login';

function App() {
  const [loged, setLoged] = React.useState(true);
  if (!loged) {
    return <Login />;
  }
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/:id" element={<Chat />} />
          <Route path="/profile" element={<Chat />} />
          <Route path="/settings" element={<Chat />} />
          <Route path="/profile/:id" element={<Chat />} />
          <Route path="*" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
