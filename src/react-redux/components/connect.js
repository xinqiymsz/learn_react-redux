import React from 'react';

import PropTypes from 'prop-types';
import store from '../../store'


export default function connect (mapStateToProps, mapDispatchToProps) {
  return function(WrappedComponent) {
    return class Connect extends React.Component {
        static contextTypes = {
            store: PropTypes.shape({
                subscribe: PropTypes.func.isRequired,
                dispatch: PropTypes.func.isRequired,
                getState: PropTypes.func.isRequired
            }).isRequired
        }

        constructor(props, context) {
            super(props, context);
            this.store = context.store;
            console.log(context, '//context');
            this.state = mapStateToProps(this.store.getState());
            this.mappedDispatch = mapDispatchToProps(this.store.dispatch);
        }

        componentDidMount() {
            this.unsub = this.store.subscribe(() => {
                const mappedState = mapStateToProps(this.store.getState());
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
