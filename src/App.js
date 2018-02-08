import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Nav'
import Landing from './Components/Landing'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import AddCategory from './Components/Categories/Addcategory'
import Categories from './Components/Categories/Viewcategories'
import AddRecipe from './Components/Recipes/Addrecipe'
import UpdateCategory from './Components/Categories/Updatecategory'
import UpdateRecipe from './Components/Recipes/Updaterecipe'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/addcategory" component={AddCategory} />
          <Route exact path="/updatecategory" component={UpdateCategory} />
          <Route exact path="/addrecipe" component={AddRecipe} />
          <Route exact path="/addrecipe" component={AddRecipe} />
          <Route exact path="/updaterecipe" component={UpdateRecipe} />
        </Switch>
        <div className="copyright">
            <p>Copyright &copy; Yummy Recipes 2018. All Rights Reserved</p>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;