import React, { useState } from "react";
import { Typography } from "@material-ui/core";

import { Form } from "./components/Form/Form";

import MenuAppBar from  "./components/MenuApp";

import {isValidEmail,isValidName,isValidPhoneNumber} from "./util/formUtil";

const App = () => {
  const [user, setUser] = useState({});

  const updateUser = (data) => {
    setUser(data);

    if(isFormDataValid(data))
        alert("Hurray!! successffuly completed your form");
     // else
        // alert ("please check the form and provide valid details");


  };

  const isFormDataValid = (data) => {
    const helper =(param)=>{
      if(msg.length !== 0 ) 
      {  
         alert(msg); 
         return false;
      }
      return true;
    }
    
    //validate the form
    let msg = isValidName(data.firstName);    
    helper(msg);
    
    msg = isValidEmail(data.email);      
    helper(msg);

    msg = isValidPhoneNumber(data.phone);
    helper(msg);     
    
    
  };

  return (    
           
    <div className="App">
       <MenuAppBar/>
      <Typography variant="h6" color="primary">
        {`Hello, ${user.firstName ? user.firstName : "Stranger"}`}
      </Typography>
      <Form updateUser={updateUser} />
    </div>
  );
};

export default App;
