import { Box } from "@mui/system"
import { useEffect } from "react"

export default function Errors(props){
    useEffect(()=>{
        if (props.errorType === "duplicate_email"){
            document.getElementById("error-div").innerHTML = "Email Already in use"
        }else if(props.errorType === "db_error"){
            document.getElementById("error-div").innerHTML = "Error with database please contact administrator or view server configuration"
        }
        else if(props.errorType === "db_error"){
            document.getElementById("error-div").innerHTML = "Error with database please contact administrator or view server configuration"
        }else if(props.errorType === "no_id"){
            document.getElementById("error-div").innerHTML = "Error with creating JWT please contact administrator or view server configuration"
        }else{
            document.getElementById("error-div").innerHTML =  props.errorType       
        }
    }, [props.errorType])
    return(
        <Box style={props.errors? {display: "block"}: {display: "none"}} id="error-div" sx={{
            backgroundColor: "#e57373",
            padding: "10px"
        }}>
            
        </Box>
    )
}