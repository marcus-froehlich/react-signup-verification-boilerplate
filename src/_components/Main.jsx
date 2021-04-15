import React from 'react'
import { Alert } from '@/_components';

export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Alert />
                {this.props.children}
                </div>
        )
    }
} 