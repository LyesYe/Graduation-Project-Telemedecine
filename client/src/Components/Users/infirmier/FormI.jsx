

import Card from "../../UI/Card";
import classes from "../FormInput.module.css";
import FormInput from "../FormInput";
import { useState } from "react";
import Button from "../../UI2/Button";
import axios from "axios";


function FormI(){
    const [values, setValues] = useState({
        lastname: "",
        firstname: "",
        username: "",
        email: "",
        password: "",
        hospital: "",
      });


      const sendRequest = async () => {
        const newP = {password : "hello"};
        setValues(newP);
        const res = await axios.post('http://localhost:3001/infirmier',{
          email: values.email,
          username: values.username,
          firstname: values.firstname,
          lastname: values.lastname,
          password: values.password,
          hospital: values.hospital,
          
        }).catch(err => console.log(err));
    
        const data = await res.data;
    
        console.log(data.kind)
        console.log(res.status);
        console.log(res);
    
    
        if (res.status == 201) {
          
    
          alert('creation success')
          
        } else {
          alert('Please check probs')
        }
    
    
        return data;
      }
      
      




      const inputs = [
        {
          id: 1,
          name: "lastname",
          //value: { enteredLastName },
          placeholder: "Last name",
          errorMessage :"le nom doit etre entre 3 et 16 caractéres",
          required:true,
          type: "text",
          //onChange: { lastNameChangeHandler },
          pattern: "^[A-Za-z]{3,16}$",
    
          // onBlur: { focusHandler },
        },
        {
          id: 2,
          name: "firstname",
          //value: { enteredFirstName },
          placeholder: "First name",
          errorMessage :"le nom doit etre entre 3 et 16 caractéres",
          required:true,
          type: "text",
          //onChange: { FirstNameChangeHandler },
          pattern: "^[A-Za-z]{3,16}$",
    
          // onBlur: { focusHandler },
        },
        {
          id: 3,
          name: "username",
          placeholder: "Username",
          errorMessage :"* Username ne doit etre entre 3 et 16 caractéres",
    
          //value: { ent"",eredUserName },
          required:true,
          type: "text",
          //  onChange: { UsernameChangeHandler },
          pattern: "^[A-Za-z0-9]{3,16}$",
    
          //onBlur: { focusHandler },
        },
        {
          id: 4,
          name: "email",
          placeholder: "Email",
          errorMessage:"enter a valid email address",
          //value: { ent"",eredEmail },
          required:true,
          type: "email",
          //onChange: { emailChangeHandler },
    
          // onBlur: { focusHandler },
        },
        {
          id: 6,
          name: "hospital",
          placeholder: "Hospital",
          //value: { ent"",eredHospital },
          required:true,
          type: "text",
          // onChange: { hospitalChangeHandler },
          pattern: "^[A-Za-z]{3,16}$",
          errorMessage:"Entrez un hopital dans votre région"
          //onBlur: { focusHandler },
        },
      ];
    
      function onChange(event) {
        setValues({ ...values, [event.target.name]: event.target.value });
      }
    
      function addUserHandler(event) {
        event.preventDefault();
        console.log(inputs);
        sendRequest();

      }
    
      console.log(values);
      return (
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <Button type="submit">Ajouter infirmier</Button>
          </form>
        </Card>
      );
}

export default FormI;