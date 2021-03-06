import React, { Component } from 'react'
import Card from '../../Card'
import CardLinks from '../../CardLinks'
import CardStyle from '../../Card/style.module.css'
import pjson from '../../../../package.json'
export default class ScallopedBorder extends Component {
  state = {
    radius: 9,
    color: '#ff7900',
    weight: 2
  }

  componentDidMount () {
    const workletScript = document.createElement("script")
    workletScript.src = `https://unpkg.com/extra.css@${pjson.extras.version}/scallopedBorder.js`
    document.body.appendChild(workletScript)
  }

  render() {
    return (
      <Card>
        <h2 className={CardStyle.name}>Scalloped Border</h2>
        <div className={CardStyle.demoArea}>
          <h1 className={CardStyle.demoText} contentEditable style={{
             '--extra-scallopColor': this.state.color,
             '--extra-scallopWeight': this.state.weight,
             '--extra-scallopRadius': this.state.radius,
             background: 'paint(extra-scallopedBorder)'
            }}
            > extra.css </h1>
        </div>
        <ul className={CardStyle.customProps}>
          <li>
            <label htmlFor="--extra-scallopColor">--extra-scallopColor:</label> <input type="color" value={this.state.color} id="--extra-scallopColor"
              onChange={e => this.setState({ color: e.target.value })} />
          </li>
          <li>
            <label htmlFor="--extra-scallopRadius">--extra-scallopRadius:</label>
            <div>
              <div className={CardStyle.inputVal}>{this.state.radius}</div>
              <input className={CardStyle.rangeSlider} type="range" min="0" max="40" value={this.state.radius} id="--extra-scallopRadius"
                onChange={e => this.setState({ radius: e.target.value })} />
            </div>
          </li>
          <li>
            <label htmlFor="--extra-scallopWeight">--extra-scallopWeight:</label>
            <div>
              <div className={CardStyle.inputVal}>{this.state.weight}</div>
              <input className={CardStyle.rangeSlider} type="range" min="0" max="30" value={this.state.weight} id="--extra-scallopWeight"
                onChange={e => this.setState({ weight: e.target.value })} />
            </div>
          </li>
        </ul>
        <CardLinks name='scallopedBorder' penLink='MRxWgN'/>
      </Card>
    )
  }
}