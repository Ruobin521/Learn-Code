import React from 'react'
import ReactDom from 'react-dom'
import Index from './index'
import List from '../components/list'
import Detail from '../components/detail'

import {Router, Route, hashHistory} from 'react-router'

export default class Root extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route component={Index} path="/">
                    <Route component={Detail} path="detail"></Route>
                </Route>
             
                <Route component={List} path="list">
                </Route>
            </Router>
        )
    }
}

ReactDom.render(
    <Root/>, document.getElementById('example'))