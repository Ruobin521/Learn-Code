import React from "react";
import Child from '../components/bodyChild'
import ReactMixin from 'react-mixin'
import log from '../js/mixinLog'

export default class BodyIndex extends React.Component {

    constructor() {
        super() //调用基类所有的初始化方法
        this.state = {
            userName: 'petter3',
            age: 20
        }
    }

    changeUserInfo() {
        this.setState({age: 50})
        // console.log(this.refs.btn);
        log.log()
    }

    handleChildDataChange(event) {
        this.setState({age: event.target.value})
    }
    render() {
        // setTimeout(() => {     //更改state的时候     this.setState({userName: 'Dang'}) },
        // 4000);
        return (
            <div>
                <h2>页面的主题内容</h2>
                <p>{this.props.userId} {this.state.age}</p>
                <p>
                    {this.state.age}</p>
                <input
                    ref='btn'
                    type='button'
                    value='修改'
                    onClick={this
                    .changeUserInfo
                    .bind(this)}/>
                <Child
                    handleChildDataChange={this
                    .handleChildDataChange
                    .bind(this)}></Child>
            </div>
        )
    }
}

BodyIndex.propTypes = {
    userId: React.PropTypes.number
}

ReactMixin(BodyIndex.prototype, log)