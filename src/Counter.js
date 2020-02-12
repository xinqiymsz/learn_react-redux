import React from 'react';
import './App.css';
import connect from './react-redux/components/connect'

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 22
    }
  }

//   componentDidMount() {
//     this.unsub = store.subscribe(() => {
//         if(this.state.num === store.getState().num) {
//             return;
//          }
//          console.log('lalall11111a');
//         this.setState({
//             num: store.getState().num
//         });
//     });
// }
//   render () {
//     return <div>
//       {this.state.num}
//       <button onClick={() => {store.dispatch({
//         type: 'ADD',
//         payload: 22
//       })}}>+</button>
//     </div>
//   }
  render () {
    return <div>
      {this.props.num}
      <button onClick={() => this.props.add(9989)}>+</button>
    </div>
  }
}

const mapStateToProps = (state) => ({
  num: state.num
})
const mapDispatchToProps = (dispatch) => {
  return {
    add: (num) => {
      dispatch({
        type: 'ADD',
        payload: num
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
