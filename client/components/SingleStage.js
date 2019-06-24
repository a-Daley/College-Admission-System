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
import {getStageOneText} from '../store'
import ProgressBar from './ProgressBar'

class SingleStage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: ''
    }
  }

  async componentDidMount() {
    if (this.props.stage === 1) {
      await this.props.getStageOneText(this.props.stats.collegeTier)
    } else {
      await this.props.getLaterStagesText(this.props.stats)
    }
    this.setState({description: this.props.text})
  }

  render() {
    const classes = useStyles()
    const {topic, stage} = this.props

    return (
      <div>
        {!this.state.description.length ? (
          <ProgressBar />
        ) : (
          <div className="content">
            <Card raised={true} className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  `Stage ${stage}:${topic}`
                </Typography>
                <Typography variant="body2" component="p">
                  {this.state.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  stats: () => state.stats,
  text: () => state.stage.text
})

const mapDispatchToProps = dispatch => ({
  getStageOneText: college => dispatch(getStageOneText(college))
})

const useStyles = makeStyles({
  card: {
    minWidth: 500,
    backgroundColor: 'yellow'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleStage)
