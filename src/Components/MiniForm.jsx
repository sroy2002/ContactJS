import React,{useRef} from "react";
import { TextField, Button, Box } from "@mui/material";
import emailjs from '@emailjs/browser';

const MiniForm = () => {
    const form = useRef();

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_z5u1ytg','template_g4e2eds',
            form.current,
            'wKMACp2ezBIdyrRcf'
        ).then(
            (result)=>{
                console.log(result.text);
                alert("Message Sent Successfully")
                form.current.reset();
            },
            (error)=>{
                console.log(error.text);
                alert("Message Not Sent")
            }
        )
    }
  return (
    <Box
      component="form"
      ref={form}
      onSubmit={sendEmail}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 500,
        margin: "0 auto",
      }}
    >
      <TextField
        name="user_name"
        label="Name"
        variant="outlined"
        fullWidth
        required
        sx={{
            "& .MuiOutlinedInput-root": {
                borderRadius: "30px", 
              },
          
        }}
      />
      <TextField
      name="user_email"
        label="Email"
        variant="outlined"
        fullWidth
        required
        type="email"
         sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px", 
          },
          
        }}
      />
      <TextField
        label="Message"
        variant="outlined"
        name="user_message"
        fullWidth
        multiline
        rows={4}
         sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "25px", 
          },
          
        }}
      />
      <Button type="submit" variant="contained" color="primary"  sx={{
        borderRadius: "30px",
        padding: "10px 20px",
        fontWeight: 700,
        }}>
        Submit
      </Button>
    </Box>
  );
};

export default MiniForm;
