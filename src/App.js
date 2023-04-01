import home from './Icons/activeAssignment.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Modules from './pages/Modules.jsx';
import Analytics from './pages/Instruction.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import profile from './Icons/profile.jpg';
const ActiveMenu = () =>{
  <div>hellow bar</div>
}

const Header = () =>{
  return(
    <>
    <div className="header">
      <div className="logo">
        EDYODA
      </div>
      <div className="login-text">
        Hi Test Learner!
        {/* <img src={profile} className="profile"/> */}
      </div>
      <div className='login'>
      <img src={profile} className="profile"/>
      </div>
      
    </div>
    <div className="dropdown" >
          <div className="drop-class">
            <select>
              <option>
                DS031221
              </option>
              <option>
                DS261121
              </option>
              <option>
                FSR222222
              </option>
              <option>
                ECRD
              </option>
            </select>
          </div>
          <div className="drop-name">
            Data Scientist Program
          </div>
      </div> 
    </>  
  )
}


function App() {
  return (
    <>
    <div>
      <Header />
    </div>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </>
  );
}

export default App;
