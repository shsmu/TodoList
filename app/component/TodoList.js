import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
    static propTypes = {
        todos: React.PropTypes.array.isRequired,
        onComplete: React.PropTypes.func.isRequired,
        onReopen: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.todos
                        .map(it => (
                            <Todo key={it.id} todo={it}
                                  onReopen={this.props.onReopen}
                                  onComplete={this.props.onComplete} />
                        ))
                }
            </div>
        )
    }
}
