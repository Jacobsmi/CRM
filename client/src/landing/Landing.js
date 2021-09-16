import { Button, AppBar, Toolbar, Typography, Grid, Box } from '@mui/material';
import { Link, useHistory } from "react-router-dom";

const buttonClick = (buttonNum, history) => {
  if (buttonNum === 1) {
    history.push("/signup");
  } else if (buttonNum === 2) {
    history.push("/login");
  }
}

export default function Landing() {
  let history = useHistory();

  return (
    <div className="Landing" style={{
      height: "100vh",
      display: "grid",
      gridTemplateRows: "5fr 95fr"
    }}> 
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Customer Relation Manager
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to="/login"
            style={{
              marginRight: "2vw"
            }}
          >
            Login
          </Button>

          <Button
            variant="contained"
            component={Link}
            to="/signup"
          >
            Sign Up
          </Button>

        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column"}}>
        <Typography variant="h3">Customer Relation Manager</Typography>
        <Typography variant="h5">The best way to manage customer and your business' relationship with them.</Typography>
        <Button variant="contained" component={Link} to="/signup" style={{height:"50px", width: "200px"}}>Get Started</Button>
      </Box>

    </div>
  )
}