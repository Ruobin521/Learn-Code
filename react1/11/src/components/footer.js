import React from "react";

const footerClass = require('../css/footer.css')

export default class Footer extends React.Component {
    render() {
        return (
            <footer className={footerClass.footerMain}>
                <h1>页面底部</h1>
            </footer>
        )
    }
}