import React, { Component } from 'react';
import { Checkbox } from 'antd';



export default class Todo extends React.Component {
    static propTypes = {
        onComplete: React.PropTypes.func.isRequired,
        onReopen: React.PropTypes.func.isRequired,
        todo: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if (e.target.checked) {
            this.props.onComplete(this.props.todo.id)
        } else {
            this.props.onReopen(this.props.todo.id)
        }
    }

    render() {
        return (
            <div >
                <div>
                    <Checkbox onChange={this.handleChange} defaultChecked={this.props.todo.done} >{this.props.todo.content}</Checkbox>
                </div>
            </div>
        )
    }
}