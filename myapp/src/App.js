import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Book from './book';
import Insert from "./insert";
import Update from './update';
import Login from './login';
import Stock from './stock';


function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route  path='/' element={<Login/>}/>
          </Routes>
          <Routes>
            <Route path="/insert"  element={<Insert/>}/>
          </Routes>
          <Routes>
            <Route path="update/:id"  element={<Update/>}/>
          </Routes>
          <Routes>
                <Route path='/stock' element={<Stock/>}/>
          </Routes>
    </BrowserRouter>







/*   <>
      <section class="sec_1">
        <div class="container">
          <div class="row">
            <div class="col  col_a">
              <h1>hello</h1>
            </div>
            <div class="col  col_b">
              <form  action=""  method="">
                <label for="first_name">Enter First-Name:</label>
                <input type="text" name="first_name"  id="first_name"/>
                <label for="email">Enter Email:</label>
                <input type="text" name="email" id="email"/>
                <input type="submit"/>
              </form>
            </div>
          </div>
        </div>
      </section>
  
  </> */
  );
}

export default App;
