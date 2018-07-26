var React = require('react')
var ReactDom = require('react-dom')
import CompometHeader from '../components/header'
import CompometBody from '../components/body'
import CompometFooter from '../components/footer'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <CompometHeader></CompometHeader>
                <CompometBody userId={123456}></CompometBody>
                <CompometFooter></CompometFooter>
            </div>
        )
    }
}

// ReactDom.render(
//     <Index/>, document.getElementById('example'))