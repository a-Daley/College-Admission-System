import React, {Component} from 'react'
import {Card} from '@material-ui/core'

export default class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gender: '',
      incomeLevel: '',
      collegeTier: ''
    }
  }

  render() {
    return (
      <div className="content">
        <Card />
      </div>
    )
  }
}
