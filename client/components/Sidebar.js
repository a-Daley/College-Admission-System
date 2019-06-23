import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import MainChart from './MainChart'

const Sidebar = () => {
  const classes = useStyles()

  return (
    <div className="sidebar">
      <Card raised={true}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            The Big Picture: How College Admissions <b>Is Affected</b> By Other
            System
          </Typography>
          <MainChart />
        </CardContent>
      </Card>
      <br />
      <br />
      <Card raised={true}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            The Big Picture: How College Admissions <b>Affects</b> Other Systems
          </Typography>
          <MainChart />
        </CardContent>
      </Card>
    </div>
  )
}

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

export default Sidebar
