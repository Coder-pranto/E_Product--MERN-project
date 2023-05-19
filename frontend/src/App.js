import './css/App.css';
import Header from './components/Header';
import Products from './components/Products';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails'
import {Routes,Route,Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/products' exact element={<Products/>}/>
        <Route path='/' exact element={<Navigate to='/products' replace= {true} />}/>
        <Route path='/product/:pid' exact element={<ProductDetails/>}/>
       
      </Routes>
  
    </div>
  );
}

export default App;






















//by recat-router-dom (v6)
//Redirect = Navigate
//Routes = Switch

/* 
<Route path='/home' exact >
    <Products/>
 </Route>

        you have to use:
              <Route path='/home' exact element={<Home/>}/>

        
*/