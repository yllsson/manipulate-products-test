import List from './components/List';
import './styles/styles.css';

function App() {
  return (
    <div className='App flex'>
      <nav className='flex'>
        <a className='flex' href='#'>
          Home
        </a>
        <a className='flex' href='#'>
          About
        </a>
      </nav>
      <main className='flex'>
        <h1>Products:</h1>

        <List />
      </main>
    </div>
  );
}

export default App;
