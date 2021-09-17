import { Box, FormControl, InputLabel, Input, FormHelperText, Typography, Button } from "@mui/material";
import { useState } from "react";
import { validateName, validateEmail, validatePassword } from "./validators";
import createUser from "./createUser"
// TO DO 

// Validate all on signup click

export default function Signup() {
  const [firstName, setFirstName] = useState('')
  const [validFirstName, setValidFirstName] = useState(true)

  const [lastName, setLastName] = useState('')
  const [validLastName, setValidLastName] = useState(true)

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(true)

  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword] = useState(true)

  const [confirm, setConfirm] = useState('')
  const [validConfirm, setValidConfirm] = useState(true)

  const handleChange = (event) => {
    if (event.target.id === "signup-first-name-input") {
      setFirstName(event.target.value)
      setValidFirstName(validateName(event.target.value))
    }
    else if (event.target.id === "signup-last-name-input") {
      setLastName(event.target.value)
      setValidLastName(validateName(event.target.value))
    }
    else if (event.target.id === "signup-email-input") {
      setEmail(event.target.value)
      setValidEmail(validateEmail(event.target.value))
    }
    else if (event.target.id === "signup-password-input") {
      setPassword(event.target.value)
      setValidPassword(validatePassword(event.target.value))
    }
    else if (event.target.id === "signup-confirm-input") {
      setConfirm(event.target.value)
      setValidConfirm(password === event.target.value)
    }
  }

  const processSignup = async () =>{
    setValidFirstName(validateName(firstName))
    setValidLastName(validateName(lastName))
    setValidEmail(validateEmail(email))
    setValidPassword(validatePassword(password))
    setValidConfirm(password === confirm)

    if (validFirstName && validLastName && validEmail && validPassword && validConfirm){
      // Function that has the API call to create the user in the database after all fields are confirmed valid
      const result = await createUser(firstName, lastName, email, password);
      console.log(result);
    }
  }
  return (
    <div className="Signup" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ padding: 10, border: 5, borderColor: "primary.main", borderRadius: 10, }}
      >
        <Typography variant="h4" align="center" style={{ marginBottom: "5vh" }}>Sign Up</Typography>

        <FormControl error={!validFirstName} variant="standard" style={{ display: "inline-block" }}>
          <InputLabel htmlFor="signup-first-name-input">First Name</InputLabel>
          <Input id="signup-first-name-input" value={firstName} onChange={handleChange} placeholder="First Name"
            style={{
              boxSizing: "border-box",
              width: "18vw",
              marginRight: "4vw",
            }}
          />
          <FormHelperText id="signup-first-name-helper-text" style={validFirstName ? { display: "none" } : { display: "block" }}>Invalid First Name</FormHelperText>
        </FormControl>

        <FormControl error={!validLastName} variant="standard" style={{ display: "inline-block", marginBottom: "3vh" }}>
          <InputLabel htmlFor="signup-last-name-input">Last Name</InputLabel>
          <Input id="signup-last-name-input" value={lastName} onChange={handleChange} placeholder="Last Name"
            style={{
              boxSizing: "border-box",
              width: "18vw",
            }}
          />
          <FormHelperText id="signup-last-name-helper-text" style={validLastName ? { display: "none" } : { display: "block" }}>Invalid Last Name</FormHelperText>
        </FormControl>

        <FormControl variant="standard" error={!validEmail} style={{ display: "block", marginBottom: "3vh" }}>
          <InputLabel htmlFor="signup-email-input">E-Mail</InputLabel>
          <Input id="signup-email-input" value={email} onChange={handleChange} placeholder="E-Mail"
            style={{
              width: "40vw"
            }}
          />
          <FormHelperText id="signup-email-helper-text" style={validEmail ? { display: "none" } : { display: "block" }}>Invalid Email</FormHelperText>
        </FormControl>

        <FormControl variant="standard" error = {!validPassword} style={{ display: "block", marginBottom: "3vh" }}>
          <InputLabel htmlFor="signup-password-input">Password</InputLabel>
          <Input id="signup-password-input" value={password} onChange={handleChange} placeholder="Password" type="password"
            style={{
              width: "40vw"
            }}
          />
          <FormHelperText id="signup-email-helper-text" style={validPassword ? { display: "none" } : { display: "block" }}>Invalid Password. Must be at least 8 digits with at least one uppercase, one lowercase, a number, and a special character !@#$%^&*()</FormHelperText>
        </FormControl>

        <FormControl variant="standard" style={{ display: "block", marginBottom: "3vh" }} error={!validConfirm}>
          <InputLabel htmlFor="signup-confirm-input">Confirm Password</InputLabel>
          <Input id="signup-confirm-input" value={confirm} onChange={handleChange} placeholder="Confirm Password" type="password"
            style={{
              width: "40vw"
            }}
          />
          <FormHelperText id="signup-confirm-helper-text" style={validConfirm ? { display: "none" } : { display: "block" }}>Passwords do not match</FormHelperText>
        </FormControl>
        <Button variant="contained" style={{ width: "40vw" }} onClick={processSignup}>Sign Up</Button>
      </Box>
    </div>
  )
}