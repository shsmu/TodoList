import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button  } from 'antd'
import './index.css';

const FormItem = Form.Item;

class InputComponent extends React.Component {

    render() {
        return (
            <div className='input-wrapper'>
                <Form layout="inline">
                    <FormItem>
                    <Input
                            className='event-input'
                            type='text'
                            name='TodoText'
                            onChange={e => this.props.onChange(e.target.value)}
                        />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" >
                            增加
                        </Button>
                    </FormItem>
                </Form>
            </div>
    )
    }
}

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
                <InputComponent onChange={ v => this.setState({value: v})} />
                <LabelComponent value={this.state.value}/>
            </div>
        )
    }
}

ReactDOM.render(<RootComponent />, document.getElementById('root'))
