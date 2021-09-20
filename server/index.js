import express from "express";
import cors from "cors";
import { createUser } from "./helpers/createUserHelper.js";

const app = express();
app.use(express.json())
app.use(cors({origin: "http://localhost:3000", credentials: true}))

/* createuser route takes a body with guaranteed input of the following
  {
    first_name: string,
    last_name: string,
    email: string, 
    password: string
  }
*/
app.post("/createuser", async (req, res) => {
  const result = await createUser(req.body.first_name, req.body.last_name, req.body.email, req.body.password);
  if (result[0] === false){
    return res.send(JSON.stringify({
      "success": result[0],
      "error": result[1]
    }))
  }
  res.cookie('id', result[1], {secure: true, httpOnly: true})
  res.send(JSON.stringify({
    "success": result[0]
  }))
})

app.listen(5000, () => console.log("App is listening at http://localhost:5000"))