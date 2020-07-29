import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

 class FormUserDetails extends Component {
    constructor(props) {
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            email: '',
            phoneNumber:''
                
                  };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      
      handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.);
        event.preventDefault();
      }
      
      
      // Handle fields change    
      handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };
      


  render() {    // return (<h1>hevv</h1>);
   // const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          {/* <Dialog
            open
            fullWidth
            maxWidth='sm'
          > */}
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={this.handleChange('firstName')}
              defaultValue={this.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={this.handleChange('lastName')}
              defaultValue={this.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={this.handleChange('email')}
              defaultValue={this.email}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          {/* </Dialog> */}
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
