import React from 'react';
import { Form, Input, Button  } from 'antd'
import '../index.css';

const FormItem = Form.Item;

export default class AddTodo extends React.Component {
    static propTypes = {
        onCreate: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate() {
        this.props.onCreate(this.state.value);
        this.setState({value: ''})
    }

    render() {
        return (
            <div className='input-wrapper'>
                <Form layout="inline">
                    <FormItem>
                    <Input
                            className='event-input'
                            type='text'
                            value={this.state.value}
                            name='TodoText'
                            onChange={e => this.setState({value: e.target.value})}
                        />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" onClick={this.handleCreate}>
                            Add
                        </Button>
                    </FormItem>
                </Form>
            </div>
    )
    }
}