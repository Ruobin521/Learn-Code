import React from "react";
import Button from 'antd/lib/button';
import 'antd/dist/antd.css';

export default class BodyChild extends React.Component {

    constructor() {
        super() //调用基类所有的初始化方法
    }
    render() {
        return (
            <div>
                <button>测试</button>
                 <Button type="primary">Button</Button>
                <h2>主体部分的子组件</h2>
                <input   type='input' onChange={this.props.handleChildDataChange}/>
            </div>
        )
    }
}