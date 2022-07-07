import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

const App = () => {
  return (
    <div
      className="bg-dark w-100"
      style={{ height: '100vh', overflowX: 'hidden' }}
    >
      <Navbar />
      <SearchForm />
    </div>
  );
};

export default App;
