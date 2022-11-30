import React from "react";
import { Typography,Container, Box, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
        {/* There is already an h1 in the page, let's not duplicate it. */}
        <Typography
          variant="h1"
          color="error"
          align="center"
          sx={{ background: "#eee", mt: 4, border: "1px solid green" }}
        >
          Typography, Buttons,Container, Box
        </Typography>
        {/* body: p etiketidir, button=span etiketidir+büyük harf */}
        <Typography variant="body1" color="primary.dark" align="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          officiis odit consequatur quas harum adipisci ipsa quam labore totam
          possimus!
        </Typography>

        <Typography variant="button" color="success.light" align="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          officiis odit consequatur quas harum adipisci ipsa quam labore totam
          possimus!
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Box sx={{display:"flex", flexDirection:"column",gap:2, marginTop:4}}>
          <Button variant="contained" color="error" startIcon={<SendIcon/>}>SEND   </Button>



          <Button variant="outlined" color="success" endIcon={<DeleteIcon/>}>DELETE</Button>
        </Box>
      </Container>
    </div>
  );
};

export default TypoButtons;
