import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import UseFetch from './components/UseFetch';
import Home from './Pages/Home'
import Create from './Pages/Create'
import NoteList from './Pages/NoteList';
import Login from './Pages/Login';
import NotesDetails from './Pages/NotesDetails';
import './index.css'
import SignUp from './Pages/SignUp';

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