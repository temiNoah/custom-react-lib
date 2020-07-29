import React from "react";
import { Grid } from "@material-ui/core";
//import Header from "./Header";
//import Content from "./Content";
import FormUserDetails from "./components/FormUserDetails";
import MenuAppBar from './components/MenuApp';

const App = () => {
  return (
     <div className="App" >
           <MenuAppBar/>
           <FormUserDetails /> 
   </div>
  );
};

export default App;
