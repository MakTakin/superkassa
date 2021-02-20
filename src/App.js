import React, {useState} from 'react';
import {connect} from 'react-redux'
import classes from './App.module.css';
import {togleStateProps} from "./redux/actions";

function App(props) {
    const togleState = () => {
        const valueOfState =  props.state == 'OFF' ? 'ON' : 'OFF'
        props.togleStateProps(valueOfState)
    }
    const cls = [classes.Btn]
    if (props.state === 'ON') {
        cls.push(classes.BtnColor)
    }
  return (
    <div className={classes.App}>
        <button className={cls.join(' ')} onClick={() => togleState()}>{props.state}</button>
    </div>
  );
}

const mapStateToProps = (state) => {
    return{
        state: state.state
    }
}

const mapDispatchToProps = {
    togleStateProps
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
