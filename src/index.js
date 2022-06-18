import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'


const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Counter onIncrement={this.increase(this.props.value, 'INCREMENT')} onDecrement={this.increase(this.props.value, 'DECREMENT')} value={0}/>,
    rootEl
)

render()