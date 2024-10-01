import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Beachs1 } from './components/Beachs1';
import { Beachs2 } from './components/Beachs2';
import { Beachs3 } from './components/Beachs3';
import { Beachs4 } from './components/Beachs4';
import { Beachs5 } from './components/Beachs5';
import { Beachs6 } from './components/Beachs6';

function App() {

    return (
      <>
        <BrowserRouter>
          <div>
            <h1 className='text-center my-3'>Gallery Project</h1>
          </div>
          <div className='container d-flex justify-content-center'>
            <Routes>
              <Route path='/Beach1' element={<Beachs1 className='main-img-container'/>} />
              <Route path='/Beach2' element={<Beachs2 className='main-img-container'/>} />
              <Route path='/Beach3' element={<Beachs3 className='main-img-container'/>} />
              <Route path='/Beach4' element={<Beachs4 className='main-img-container'/>} />
              <Route path='/Beach5' element={<Beachs5 className='main-img-container'/>} />
              <Route path='/Beach6' element={<Beachs6 className='main-img-container'/>} />
            </Routes>
          </div>
          <div className='container'>
            <Navigation />
          </div>
        </BrowserRouter>
      </>
    )
  }

  export default App