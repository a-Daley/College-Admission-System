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
        <Route exact path="/stage-one" component={SingleStage} />
        <Route component={GameBoard} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
