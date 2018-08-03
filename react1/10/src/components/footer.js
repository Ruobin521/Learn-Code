import React from "../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";

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