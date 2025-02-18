import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route index element={<Home/>} />
    <Route path='/new' element={<AddNote/>}/>
    <Route path='/edit/:id' element={<EditNote/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
