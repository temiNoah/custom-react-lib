const errors = {};

export const isValidName = (name) => { 
    
    return  name.length < 5 ? 'Name must be at least 5 characters long!': '';
};

export function isValidEmail(email) {

    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      );
    
      return validEmailRegex.test(email);
}

export function isValidUsername(username){  
        // null check
        if (!username) {
            return 'This field cannot be empty.'
        }

}

export function isValidPassword(password){
 
    // null check
        if (!password) {
            password= 'This field cannot be empty.'
        }
        // After null checking, check length
        else if (values.password1.length < 8) {
            password = 'The password provided is not long enough.'
        }
        //To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
        else if ( /^[A-Za-z]\w{7,14}$/g.test(password))   //(/([A-Z]+)/g.test(values.password1)) 
        {
            password = 'You don\'t have any capital letters in there yo'
        } 
 }