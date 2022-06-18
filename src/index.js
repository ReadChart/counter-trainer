import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import counter from './reducers/index'
import {createStore} from "redux";

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Counter
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        value={store.getState()}/>,
    rootEl
)

render()
store.subscribe(render)