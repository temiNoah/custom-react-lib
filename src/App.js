import React, { useState } from "react";
import { Typography } from "@material-ui/core";

import { Form } from "./Components/Form/Form";

const App = () => {
  const [user, setUser] = useState({});

  const updateUser = (data) => {
    setUser(data);
  };

  return (
    <div className="App">
      <Typography variant="h1" color="primary">
        {`Hello, ${user.firstName ? user.firstName : "Stranger"}`}
      </Typography>
      <Form updateUser={updateUser} />
    </div>
  );
};

export default App;
