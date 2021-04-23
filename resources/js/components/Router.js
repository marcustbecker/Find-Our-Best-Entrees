import React from "react";
import ReactDOM from "react-dom";
import "./../../css/app.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import Register from "./Register/Register";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import NavbarMenu from "./Navbar/NavbarMenu";
import AdminHome from "./Admin/AdminHome";
import FoodList from "./Food/FoodList";
import FoodAdd from "./Food/FoodAdd";
import FoodEdit from "./Food/FoodEdit";
import CategoryList from "./Category/categoryList";
import CategoryAdd from "./Category/categoryAdd";
import CategoryEdit from "./Category/CategoryEdit";
import RestaurantList from "./Restaurant/restaurantList";
import RestaurantAdd from "./Restaurant/restaurantAdd";

function App() {
    return (
        //Routing return navbar and switch case component
        <Router>
            <div className="App">
                <NavbarMenu />
            </div>
            <Switch>
                <Route path="/login" component={SignIn} />
                <Route path="/register" component={Register} />

                <Route path="/dashboard" component={Dashboard} />

                <Route path="/adminHome" component={AdminHome} />
                <Route path="/foodList" component={FoodList} />
                <Route path="/foodAdd" component={FoodAdd} />
                <Route path="/foodEdit/:id" component={FoodEdit} />

                <Route path="/categoryList" component={CategoryList} />
                <Route path="/categoryAdd" component={CategoryAdd} />
                <Route path="/categoryEdit" component={CategoryEdit} />

                <Route path="/restaurantList" component={RestaurantList} />
                <Route path="/restaurantAdd" component={RestaurantAdd} />
                <Route path="/restaurantEdit" />

                <Route path="/" component={AdminHome} />
            </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
