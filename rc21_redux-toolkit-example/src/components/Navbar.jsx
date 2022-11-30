import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { silKullanici } from "../features/yetkiSlice";


export default function Navbar() {
  const dispatch = useDispatch();
  //!logout yapabilmek için silKullanici setter ına ihtiyacım var, dispatch ile getirdim (reducer)
  const user = useSelector((state) => state.yetkiSlice.kullanici);
  const navigate = useNavigate();
  console.log(user);

  const handleLogout = () => {
    //! haberler sayfasındayken navbar da logout yazan yere tıklayınca hem sayfadan çıkıp login sayfasına gitmeli=navigate("/login"), hem de oluşan kullanıcı iptal olmalı=silKullanici()
    dispatch(silKullanici());
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            Clarusway News
          </Typography>
          {/* kullanıcı varsa yani haberler sayfasına girildiyse, 
           navbarda logout yazsın....gerisi altta */}
          {user ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
