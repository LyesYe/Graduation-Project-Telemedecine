import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HealingIcon from '@mui/icons-material/Healing';
import './Nav.css'


const pagesAdmin = ['Accounts', 'Hospitals', 'Teleconsulation'];
const pagesMedecin = ['Patients', 'Teleconsultations', 'MesRequetes'];
const pagesInfirmier = ['Patients', 'Teleconsulation'];
const pagesPatient = ['MonDossier', 'Upload'];
const settings = ['Profile', 'Logout'];
var pages ; 
const ResponsiveAppBar = () => {

    const isloggedin = useSelector ((state) => state.isLoggedIn);
	console.log("nav"+isloggedin) 
	console.log("nav -- "+localStorage.getItem("logi"))
    
    

        switch (localStorage.getItem("logi")) {
            case "1": pages = pagesAdmin;
                break;
            case "2": pages = pagesMedecin;
                break;
            case "3": pages = pagesInfirmier;
                break;
            case "4": pages = pagesPatient;
                break;
            default:
                break;
        }


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='AppBar'  position="relative">
      <Container className='navContainer' maxWidth="xl">
        <Toolbar  className='Toolbar' disableGutters>

{/* ------------------------------------------Web Logo ------------------------------------------------*/}

        
          <div id="logoz">

          { <HealingIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> }
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 10,
              display: { xs: 'none', md: 'flex' },
              
              fontWeight: 600,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MyDeciness
          </Typography> */}
          <div id="logtitle">
            MyDecine
          </div>
          </div>


{/* ------------------------------------------Mobile Tabs------------------------------------------------*/}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                      <Link style = {{textDecoration:"none",color:"black"}} to={`/${page}`}>
                      {page}
                      </Link>
                </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


{/* ------------------------------------------Mobile logo------------------------------------------------*/}

          
          <HealingIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 600,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MyDecine
          </Typography>



{/* ------------------------------------------web Tabs------------------------------------------------*/}


          <Box id="webleft"  sx={{  marginLeft:'auto', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              // <div key={page}  className="navitems">
              <Button
              id="but"
              component={Link}
              key={page}
              onClick={handleCloseNavMenu}
              to={`/${page}`}
              >
                  {/* <Link className='link'  to={`/${page}`}> */}
                        {page}
                        {/* </Link> */}
                </Button>
              // </div>
            ))}
          </Box>

          <Box id='web' sx={{ flexGrow: 0 }}>
            <div className="tooltip">
            <Tooltip  title="Open settings">
              <IconButton   onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Typography className='Typography' textAlign="center">  */}
                  <Box className='Typography'>
                   Welcome {localStorage.getItem('username')}  
                  </Box>
                   
                {/* </Typography> */}
                <Avatar className='avatar' alt="Lyes Ye" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            </div>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}  component={Link} to={`/${setting}`}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
