import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import UseFetch from './components/UseFetch';
import Home from './components/Home'
import NoteList from './components/NoteList';
import Create from './components/Create';
import Login from './components/Login';
import NotesDetails from './components/NotesDetails';
import './index.css'

export const stateContext = createContext();

function App() {

  const { data, isPending } = UseFetch("notes");

  return (
    <stateContext.Provider value={{ data, isPending }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/note/" element={<NoteList />} />
          <Route path="/note/:id" element={<NotesDetails />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </stateContext.Provider>
  )
}

export default App