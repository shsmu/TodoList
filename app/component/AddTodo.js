import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button  } from 'antd'
import '../index.css';

const FormItem = Form.Item;

export default class AddTodo extends React.Component {

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