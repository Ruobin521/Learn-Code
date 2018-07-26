import React from "react";
import {Link} from 'react-router'

export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            minHeader: false
        }
    }

    switchHeader() {
        // this.setState( {     minHeader: !this.state.minHeader })
    }

    render() {
        const styleHeader = {
            header: {
                backgroundColor: "#333333",
                color: '#ffffff',
                paddingTop: (this.state.minHeader)
                    ? '3px'
                    : '15px',
                paddingBottom: (this.state.minHeader)
                    ? '3px'
                    : '15px'
            }
            //还可以定义其他样式
        };

        return (
            <header
                style={styleHeader.header}
                onClick={this
                .switchHeader
                .bind(this)}>
                <h1>页面顶部</h1>
                <ul>
                    <li>
                        <Link to={'/'}>首页</Link>
                    </li>
                    <li>
                        <Link to={'/list'}>列表</Link>
                    </li>
                    <li>
                        <Link to={'/detail'}>详情</Link>
                    </li>
                </ul>
            </header>
        )
    }
}