import logo from './logo.svg';
import './App.css';
import UserHome from './components/UserHome';
import AddUser from './components/AddUser';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<UserHome/>}/>
  <Route path='/add' element={<AddUser/>}/>
  <Route path='/view' element={<ViewAll/>}/>

</Routes>
</BrowserRouter>
  );
}

export default App;
