import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Atlantic_ocean } from './components/Atlantic_ocean';
import { Beach_1 } from './components/Beach_1';
import { Beach_4 } from './components/Beach_4';
import { Bora_bora } from './components/Bora_bora';
import { Mission_beach } from './components/Mission_beach';


function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/Atlantic_ocean' element={<Atlantic_ocean className='main-img-container'/>} />
            <Route path='/Beach_1' element={<Beach_1 className='main-img-container'/>} />
            <Route path='/Beach_4' element={<Beach_4 className='main-img-container'/>} />
            <Route path='/Bora_bora' element={<Bora_bora className='main-img-container'/>} />
            <Route path='/Mission_beach' element={<Mission_beach className='main-img-container'/>} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;