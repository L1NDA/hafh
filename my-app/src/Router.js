import React, { Component } from 'react';
import {withRouter} from 'react-router'
// import './Form.css';

function Foo(props) {
    props.router.push('/users/16');
}

export default withRouter(Foo);
