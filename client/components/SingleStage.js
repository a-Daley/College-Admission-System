import React, {Component} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions
} from '@material-ui/core'
import {connect} from 'react-redux'
import ProgressBar from './ProgressBar'

const SingleStage = props => {
  const classes = useStyles()
  const {currentNum, topic} = props
  let stageInfo
  if (currentNum === 1) {
    stageInfo = props.stage1
  } else if (currentNum === 2) {
    stageInfo = props.stage2
  } else if (currentNum === 3) {
    stageInfo = props.stage3
  }

  console.log({props})
  return (
    <div>
      {currentNum === 0 ? (
        <ProgressBar />
      ) : (
        <div className="content">
          <Card raised={true} className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="h1"
              >
                {topic}
              </Typography>
              <Typography variant="body1">{stageInfo}</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  stats: state.stats,
  currentNum: state.stage.currentNum,
  stage1: state.stage.stage1,
  stage2: state.stage.stage2,
  stage3: state.stage.stage3
})

const useStyles = makeStyles({
  card: {
    minWidth: 500,
    minHeight: 500,
    backgroundColor: '#94A6AB'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

export default connect(mapStateToProps)(SingleStage)
