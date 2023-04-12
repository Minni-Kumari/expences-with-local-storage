import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeadComponent from './Headcomponent';
import Addexpencescomponent from './Addexpencescomponent';
import Viewdcexpencescomponent from './Viewdcexpencescomponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeadComponent/>}/>
          <Route path="/addexpencescompponent" element={<Addexpencescomponent/>}/>
          <Route path="/Viewdcexpencescomponent"element={<Viewdcexpencescomponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
