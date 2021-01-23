import { render } from '@testing-library/react';
import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,        
        }
    }

    // This lifecycle hook will run if there is an error.
    componentDidCatch(error, info) {
        this.setState( { hasError: true });
    }

    // Returns depending on hasError flag. Note this.props.children reference.
    render() {
        let { hasError } = this.state; 
        if(hasError) {
            return (<h1>Oh no, an error</h1>);
        } else {
            return this.props.children;
        }
    }

}


export default ErrorBoundary;