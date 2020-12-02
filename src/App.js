import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Components/Home'
import people from './people.js'

import Navbar from './Components/Navbar'

localStorage.setItem('people', JSON.stringify(people));

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
