import React, {Component} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions
} from '@material-ui/core'

const SingleStage = props => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <div className="content">
      <Card raised={true}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {topic}
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Learn More</Button>
        </CardActions>
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

export default SingleStage
