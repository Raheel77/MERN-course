import React from 'react';
import {AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';

import {Link, Outlet} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppsIcon from '@mui/icons-material/Apps';

const drawerWidth = 150;

const Layout = () => {
  return (
    <div style={{display: 'flex'}}>
      <AppBar position="fixed">
        <Toolbar>
         </Toolbar>
      </AppBar>
      <Drawer
        style={{width: drawerWidth}}
        variant="permanent"
        classes={{
          paper: {width: drawerWidth},
        }}
      >
        <Toolbar>
          <Typography variant="h5" noWrap>
            Sedap
          </Typography>
        </Toolbar>

        <div style={{overflow: 'auto'}}>
          <List>
             <ListItem button>
              <ListItemIcon><DashboardIcon/></ListItemIcon>
              <Link to={'/'}>
                <ListItemText primary="Dashboard"/>
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
              <Link to={'/products'}>
                <ListItemText primary="Products"/>
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon><AppsIcon/></ListItemIcon>
              <Link to={'/app'}>
                <ListItemText primary="Todo App"/>
              </Link>
            </ListItem>


          </List>
        </div>
      </Drawer>
      <main style={{flexGrow: 1, padding: '20px'}}>
        <Toolbar/>
        <Outlet/>
      </main>
    </div>
  );
}

export default Layout;
