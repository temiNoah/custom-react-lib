import React, { useState } from "react";

import "./Form.css";

export const Form = ({ updateUser }) => {
  const [userInput, setUserInput] = useState({});

  const handleChange = (e) => {
    let formValues = userInput;
    let name = e.target.name;
    let value = e.target.value;
    formValues[name] = value;
    setUserInput(formValues);
  };

  const handleSubmit = (e) => {
    updateUser(userInput);
    e.preventDefault();
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label>First name</label>
      <input type="text" name="firstName" onChange={handleChange} />

      <label>Last name</label>
      <input type="text" name="lastName" onChange={handleChange} />

      <label>Gender</label>
      <select name="gender" onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option defaultValue="other">Other</option>
      </select>

      <label htmlFor="email">Email address</label>
      <input type="email" name="email" onChange={handleChange} />
      <label>Nationality:</label>
      <select
        data-placeholder="Choose a Language..."
        name="nationality"
        onChange={handleChange}
      >
        <option value="Afrikaans">Afrikaans</option>
        <option value="Albanian">Albanian</option>
        <option value="Arabic">Arabic</option>
        <option value="Armenian">Armenian</option>
        <option value="Basque">Basque</option>
        <option value="Bengali">Bengali</option>
        <option value="Bulgarian">Bulgarian</option>
        <option value="Catalan">Catalan</option>
        <option value="Cambodian">Cambodian</option>
        <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
        <option value="Croatian">Croatian</option>
        <option value="Czech">Czech</option>
        <option value="Danish">Danish</option>
        <option value="Dutch">Dutch</option>
        <option value="English">English</option>
        <option value="Estonian">Estonian</option>
        <option value="Fiji">Fiji</option>
        <option value="Finnish">Finnish</option>
        <option value="French">French</option>
        <option value="Georgian">Georgian</option>
        <option value="German">German</option>
        <option value="Greek">Greek</option>
        <option value="Gujarati">Gujarati</option>
        <option value="Hebrew">Hebrew</option>
        <option value="Hindi">Hindi</option>
        <option value="Hungarian">Hungarian</option>
        <option value="Icelandic">Icelandic</option>
        <option value="Indonesian">Indonesian</option>
        <option value="Irish">Irish</option>
        <option value="Italian">Italian</option>
        <option value="Japanese">Japanese</option>
        <option value="Javanese">Javanese</option>
        <option value="Korean">Korean</option>
        <option value="Latin">Latin</option>
        <option value="Latvian">Latvian</option>
        <option value="Lithuanian">Lithuanian</option>
        <option value="Macedonian">Macedonian</option>
        <option value="Malay">Malay</option>
        <option value="Malayalam">Malayalam</option>
        <option value="Maltese">Maltese</option>
        <option value="Maori">Maori</option>
        <option value="Marathi">Marathi</option>
        <option value="Mongolian">Mongolian</option>
        <option value="Nepali">Nepali</option>
        <option value="Norwegian">Norwegian</option>
        <option value="Persian">Persian</option>
        <option value="Polish">Polish</option>
        <option value="Portuguese">Portuguese</option>
        <option value="Punjabi">Punjabi</option>
        <option value="Quechua">Quechua</option>
        <option value="Romanian">Romanian</option>
        <option value="Russian">Russian</option>
        <option value="Samoan">Samoan</option>
        <option value="Serbian">Serbian</option>
        <option value="Slovak">Slovak</option>
        <option value="Slovenian">Slovenian</option>
        <option value="Spanish">Spanish</option>
        <option value="Swahili">Swahili</option>
        <option value="Swedish ">Swedish </option>
        <option value="Tamil">Tamil</option>
        <option value="Tatar">Tatar</option>
        <option value="Telugu">Telugu</option>
        <option value="Thai">Thai</option>
        <option value="Tibetan">Tibetan</option>
        <option value="Tonga">Tonga</option>
        <option value="Turkish">Turkish</option>
        <option value="Ukrainian">Ukrainian</option>
        <option value="Urdu">Urdu</option>
        <option value="Uzbek">Uzbek</option>
        <option value="Vietnamese">Vietnamese</option>
        <option value="Welsh">Welsh</option>
        <option value="Xhosa">Xhosa</option>
      </select>

      <label htmlFor="phone">Enter your phone number</label>
      <input type="tel" id="phone" name="phone" onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};
