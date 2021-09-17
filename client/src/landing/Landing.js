import { Button, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";

export default function Landing() {

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
            sx={{
              backgroundColor: "primary.light"
            }}
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
            sx={{
              backgroundColor: "primary.light"
            }}
            variant="contained"
            component={Link}
            to="/signup"
          >
            Sign Up
          </Button>

        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <Typography variant="h3" style={{ marginBottom: "15vh" }}>Customer Relation Manager</Typography>
        <Typography variant="h5" style={{ marginBottom: "5vh" }}>The best way to manage customer and your business' relationship with them.</Typography>
        <Button variant="contained" component={Link} to="/signup" style={{ height: "50px", width: "200px" }}>Get Started</Button>
      </Box>

    </div>
  )
}