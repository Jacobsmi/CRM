import { Button, AppBar, Toolbar, Typography, Grid, Box } from '@mui/material';
import { Link, useHistory } from "react-router-dom";
import SignupLink from "./SignupLink";

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
    <div className="Landing">
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

    </div>
  )
}