import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import MoviePage from './components/MoviePage';

import { MovieProvider } from './context/movieContext';

const App: React.FC = () => {
  return (
    <MovieProvider>
      <BrowserRouter>
        <div
          className="bg-dark w-100"
          style={{ height: '100vh', overflowX: 'hidden' }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<SearchForm />} />
            <Route path="/moviePage" element={<MoviePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MovieProvider>
  );
};

export default App;
