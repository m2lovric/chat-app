import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/chat/:id' element={<Chat />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
