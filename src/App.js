import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

  const { data, loading, setLoading, currentUser } = UseFetch("notes");

  return (
    <main className="font-font text-secondary">
      <stateContext.Provider value={{ data, loading, setLoading, currentUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create" element={<Create />} />
            <Route path="/note/" element={<NoteList />} />
            <Route path="/note/:id" element={<NotesDetails />} />
            <Route path="*" element={
            <section className='flex justify-center items-center text-black font-bold'>
              <h1 className=''>Sorry, this page cannot be found</h1>
              <p>Kindly return back to the <Link>HomePage...</Link></p>
              </section>
            }/>
          </Routes>
        </Router>
      </stateContext.Provider>
    </main>
  )
}

export default App