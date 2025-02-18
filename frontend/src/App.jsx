import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import Layout from './components/common/Layout';
import './styles/style.css'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/new' element={<AddNote/>}/>
          <Route path='/edit/:id' element={<EditNote/>}/>
        </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App
