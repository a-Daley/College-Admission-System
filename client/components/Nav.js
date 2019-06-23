import React from 'react'
import {Link} from 'react-router-dom'
import {
  makeStyles,
  IconButton,
  Toolbar,
  AppBar,
  Button,
  Typography
} from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'white'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: 'white'
  }
}))

const Nav = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Home"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            The Game of Life After College
          </Typography>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav
