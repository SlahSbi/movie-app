import React, { Component } from 'react';
import Spinner from './spinner'

const Loading = (WrappedComponent) => {
    return class Loading extends React.Component {
        render() {
            return (
                this.props.isLoading ? <Spinner /> :
                    <div className="Wrapper">
                        <WrappedComponent
                            {...this.props}
                        />
                    </div>
            );
        }
    }
}

export default Loading
