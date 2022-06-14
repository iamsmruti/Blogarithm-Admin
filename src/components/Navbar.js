import '../App.css';
import {
  Drawer,
  Typography,
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
  Divider,
  Button,
  Box,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import ArticleIcon from '@mui/icons-material/Article';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userState } from '../features/userAuth';

import styles from './style.module.css';

import { logout } from '../features/userAuth';

const drawerWidth = 240;

const Navbar = (props) => {
  const loggedUser = useSelector(userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const main = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon color="primary" />,
      path: '/',
    },
  ];

  const postItems = [
    {
      text: 'All Posts',
      icon: <AutoAwesomeMotionIcon color="primary" />,
      path: '/view-all',
    },
    {
      text: 'Create New',
      icon: <ArticleIcon color="primary" />,
      path: '/create-post',
    },
    {
      text: 'My Posts',
      icon: <AutoAwesomeMotionIcon color="primary" />,
      path: '/my-posts',
    },
  ];

  const userItems = [
    {
      text: 'All Users',
      icon: <GroupIcon color="primary" />,
      path: '/users',
    },
    {
      text: 'Create User',
      icon: <GroupAddIcon color="primary" />,
      path: '/create-user',
    },
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <>
      <Box sx={{ bgcolor: 'black' }}>
        <Typography
          className="linearWipe"
          sx={{ color: 'white' }}
          margin={2}
          marginLeft={2}
          variant="h6"
        >
          Blogarithm - CMS
        </Typography>
      </Box>

      <Divider />

      <List>
        <Typography margin={2} marginLeft={2} sx={{ mb: 0 }} variant="body2">
          Main
        </Typography>
        {main.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
            className={location.pathname === item.path ? styles.active : ''}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      <List>
        <Typography margin={2} marginLeft={2} sx={{ mb: 0 }} variant="body2">
          Posts
        </Typography>
        {postItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
            className={location.pathname === item.path ? styles.active : ''}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      {loggedUser.isAdmin && (
        <List>
          <Typography margin={2} marginLeft={2} sx={{ mb: 0 }} variant="body2">
            Users
          </Typography>
          {userItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              className={location.pathname === item.path ? styles.active : ''}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      )}

      <List sx={{ mt: 'auto' }}>
        <Typography margin={2} marginLeft={2} sx={{ mb: 0 }} variant="body2">
          Settings
        </Typography>
        <ListItem
          button
          onClick={() => navigate('/profile')}
          className={location.pathname === '/profile' ? styles.active : null}
        >
          <ListItemIcon>
            <PersonIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <AppBar sx={{ bgcolor: 'black' }} elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Blogarithm CMS</Typography>
          <Button
            sx={{ ml: 'auto' }}
            variant="contained"
            color="primary"
            onClick={() => dispatch(logout())}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        className={styles.drawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
