import './App.css'; // ✅ Import the image properly
import Welcome from './components/molecule/Welcome/Welcome'; // ✅ Import the Welcome component properly
import Record from './components/molecule/Record/Record'; // ✅ Import the Record component properly
import Recording from './components/molecule/Record/Recording'; // ✅ Import the Recording component properly
import Selector from './components/molecule/Selector/Selector'

function App() {
  return (
    <>
      {/* <Welcome /> */}
      {/* <Record /> */}
      {/* <Recording /> */}
      <Selector/>
    </>
  );
}

export default App;
