import React from 'react';

import store from '../../store'


export default function connect (mapStateToProps, mapDispatchToProps) {
  return function(WrappedComponent) {
    return class Connect extends React.Component {
        constructor(props) {
            super(props);
            this.state = mapStateToProps(store.getState());
            this.mappedDispatch = mapDispatchToProps(store.dispatch);
        }

        componentDidMount() {
            this.unsub = store.subscribe(() => {
                const mappedState = mapStateToProps(store.getState());
                this.setState(mappedState);
            });
        }

        componentWillUnmount() {
            this.unsub();
        }

        render() {

            return (
                <WrappedComponent {...this.props} {...this.state}  {...this.mappedDispatch}/>
            )
        }
    }
  }
}
