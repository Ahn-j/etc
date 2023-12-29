import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Control from './control';
import Value from './value';
import * as actions from '../actions'
import { connect } from 'react-redux';

const propTypes = {
    number: PropTypes.number
};

const defaultProps = {
    number: -1
};

class Counter extends Component {

    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor() {
      const color = [
        Math.floor((Math.random()*55 + 200)),
        Math.floor((Math.random()*55 + 200)),
        Math.floor((Math.random()*55 + 200)),
      ]
      this.props.handleSetColor(color);
    }

    render() {
      const color = this.props.color;
      const style = {
        background : `rgb(${color[0]}, ${color[1]}, ${color[2]})`
      }
        return(
            <div style={style}>
              <p>{this.props.obj.a}</p>
              <p>{this.props.obj.b}</p>
              <Value number={this.props.number}/>
              <Control 
                onPlus={this.props.handleIncrement}
                onSubtract={this.props.handleDecrement}
                onRandomizeColor={this.setRandomColor}
                />
            </div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

//리덕스 스테이트안에있는걸 이 컴포넌트의 프롭스로 매핑하는 함수
const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    obj: state.counter.obj,
    color: state.ui.color
  };
}

//디스패치를 이 컴포넌트의 프롭스로 매핑
//즉, handle~ 함수를 부르면 액션이 디스패치되어짐
const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement : () => {
      dispatch(actions.increment())
    },
    handleDecrement : () => {
      dispatch(actions.decrement())
    },
    handleSetColor : (color) => {
      console.log("dispatch!!!")
      dispatch(actions.setColor(color))
    }
  }
}

//connect함수로 리덕스에 해당컴포넌트연결
//connect의 인수로 작성한 함수를 넣음으로써 해당컴포넌트의 프롭스로 사용가능
//connect는 새로운함수를 반환
export default connect(mapStateToProps, mapDispatchToProps)(Counter);