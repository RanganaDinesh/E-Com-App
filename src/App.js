
import './App.css';
import Router from './Router'
import MobileApi from './ApiData/Mobiledata';
import Filter from './Components/Utility/CreateContext.jsx/AllFilter'

function App() {
  return (
    <>
      <MobileApi>
      <Filter>
        <Router />
        </Filter>
        </MobileApi>
    </>
  );
}

export default App;
