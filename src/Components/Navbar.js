import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

export default function Navbar(){
    const navigate = useNavigate();
    return(
      <div>
        
      <AppBar position="static" >
        <Toolbar>
          
          
          <Button color="inherit" onClick={() =>navigate('/login')}>Login</Button>
          <Button color="inherit" onClick={() =>navigate('/mobiles')}>Mobiles</Button>

        </Toolbar>
      </AppBar>
    </div>
    );
}

// export default Navbar;