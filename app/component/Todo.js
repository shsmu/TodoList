import React, { Component } from 'react';
import { Form, Icon, Input, Button  } from 'antd'
import styles from './Todo.css';

const FormItem = Form.Item;


export default class Todo extends React.Component {
    render() {
        return (
            <div className="todoCls">
                <div className={styles.checkbox}>
                    <input
                        type="checkbox"
                        value=""
                        // checked={isComplete}
                        // onChange={onToggleComplete.bind(this)}
                    />
                </div>
                <div className={styles.text}>
                    text
                </div>
            </div>
        )
    }
}