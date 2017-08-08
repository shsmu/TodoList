import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button  } from 'antd'
import './index.css';
import Todo from './component/Todo'
import Footer  from './component/Footer'
import AddTodo from './component/AddTodo'
import TodoList from './component/TodoList'


const FormItem = Form.Item;


class LabelComponent extends React.Component {
    render(){
        return (
            <div>output: {this.props.value}</div>
        )
    }
}

class RootComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }

    render() {
        return (
            <div>
                <AddTodo onChange={ v => this.setState({value: v})}/>
                <Todo onChange={ v => this.setState({value: v})} />
                <TodoList />
                <LabelComponent value={this.state.value}/>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<RootComponent />, document.getElementById('root'))
