import logo from './logo.svg';
import './App.css';
import {Button, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem, Container, CardMedia, Grid, Paper} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
function App() {
  function handleClick() {
    return console.log("clicked!!")
  }

  function handleClose()  {
    return console.log("closed")
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon />
            </Button>
          </IconButton>
          <Typography variant="h6" className={"left-toolbar"}>
            Development Portfolio
          </Typography>
          <div className="toolbarButtons"></div>
          <Button color="inherit">Github</Button>`
          <Button color="inherit">LinkedIn</Button>
        </Toolbar>
      </AppBar>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <img className={"profile-pic"} src={require('./images/zach-scott-profile.jpg')}/>
        </Grid>
    </div>
  );
}

export default App;
