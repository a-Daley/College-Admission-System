import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {GameBoard, ProfilePage, SingleStage} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData()
  // }

  render() {
    return (
      <Switch>
        <Route exact path="/profile" component={ProfilePage} />
        <Route
          exact
          path="/stage-1"
          render={props => (
            <SingleStage {...props} topic="Where You'll Live" stage="1" />
          )}
        />
        <Route
          exact
          path="/stage-2"
          render={props => (
            <SingleStage {...props} topic="What You'll Make" stage="2" />
          )}
        />
        <Route
          exact
          path="/stage-3"
          render={props => (
            <SingleStage {...props} topic="How You'll Live" stage="3" />
          )}
        />
        <Route component={GameBoard} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
