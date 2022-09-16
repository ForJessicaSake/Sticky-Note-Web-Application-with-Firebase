import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import UseFetch from './components/UseFetch';
import Home from './components/Home'
import Create from './components/Create'
import NoteList from './components/NoteList';
import Login from './components/Login';
import NotesDetails from './components/NotesDetails';
import './index.css'
import SignUp from './components/SignUp';

export const stateContext = createContext();

function App() {

  const { data, loading, setLoading } = UseFetch("notes");

  return (
    <main className="font-font text-secondary">
      <stateContext.Provider value={{ data, loading, setLoading }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create" element={<Create />} />
            <Route path="/note/" element={<NoteList />} />
            <Route path="/note/:id" element={<NotesDetails />} />
          </Routes>
        </Router>
      </stateContext.Provider>
    </main>
  )
}

export default App