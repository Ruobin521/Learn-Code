import React from "react";

export default class BodyChild extends React.Component {

    constructor() {
        super() //调用基类所有的初始化方法
    }
    render() {
        return (
            <div>
                <h2>主体部分的子组件</h2>
                <input   type='input' onChange={this.props.handleChildDataChange}/>
            </div>
        )
    }
}