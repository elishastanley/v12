import React from 'react'
import Tour from 'reactour'
import storage from '../../util/storage'
import { Button } from '@blueprintjs/core'
import { GoMortarBoard } from 'react-icons/go'

// Change this key to display the tour the next time a user opens Botpress
const TOUR_KEY = 'guidedTour11_9_0'

export default class GuidedTour extends React.Component {
  state = {
    isDisplayed: false
  }

  componentDidMount() {
    if (!storage.get(TOUR_KEY)) {
      storage.set(TOUR_KEY, true)
      this.setState({ isDisplayed: true })
    }
  }

  toggle = () => this.setState({ isDisplayed: !this.state.isDisplayed })

  render() {
    const steps = [
      {
        selector: '',
        content: 'Welcome to Botpress ! This is a quick your of the most important features'
      },
      {
        selector: '#statusbar_emulator',
        content: 'The emulator allows you to easily test your bot'
      },
      {
        selector: '#statusbar_switchbot',
        content: 'Click here to return to the Admin UI and change bot'
      }
    ]

    return (
      <div onClick={this.toggle}>
        <GoMortarBoard />
        <Tour
          steps={steps}
          isOpen={this.state.isDisplayed}
          onRequestClose={this.toggle}
          lastStepNextButton={<Button>Let's get to work!</Button>}
        />
      </div>
    )
  }
}