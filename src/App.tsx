import './App.css';
import { Navbar } from './components/Navbar';
import { Cartcontainer } from './components/Cartcontainer';
import { useGlobalContext } from './Context';

function App() {
  const { loading } = useGlobalContext()!
  if(loading){
    return(
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      <Navbar/>
      <Cartcontainer/>
    </main>
  );
}

export default App;
