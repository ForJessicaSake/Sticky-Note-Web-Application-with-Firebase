import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import UseFetch from './components/UseFetch';
import Home from './components/Home'
import NoteList from './components/NoteList';
import Create from './components/Create';
import Login from './components/Login';
import NotesDetails from './components/NotesDetails';
import './index.css'
import SignUp from './components/SignUp';

export const stateContext = createContext();

function App() {

  const [loading, SetLoading] = useState(false)
  const { data, isPending } = UseFetch("notes");

  return (
    <main className="font-font text-secondary">
      <stateContext.Provider value={{ data, isPending, loading, SetLoading}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/note/" element={<NoteList />} />
            <Route path="/note/:id" element={<NotesDetails />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Router>
      </stateContext.Provider>
    </main>
  )
}

export default App