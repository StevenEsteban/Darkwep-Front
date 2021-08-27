import React, { Component } from 'react';
import Loading from 'react-fullscreen-loading';
class Loader extends Component {
    render() {
        return (
            <div>
                <Loading loading loaderColor="#922E2E" />
            </div>
        );
    }
}

export default Loader;