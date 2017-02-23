import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';

import {addTodo} from '../actions/todo'

class AddTodo extends Component {

    render() {
        const {dispatch} = this.props;
        let input;

        return (
            <div>
                <div className="ui input">
                    <input
                        ref={node => {
                            input = node
                        }}
                        type='text'
                        defaultValue={'E.' + Math.ceil(1000 * Math.random())}/>
                </div>
                <span style={{width: '5px', display: 'inline-block'}}/>
                <Button name="btnAddTodo" onClick={() => {
                    dispatch(addTodo(input.value));
                    input.value = 'E.' + Math.ceil(1000 * Math.random());
                }}>
                    AddTodo
                </Button>
            </div>
        );
    }
}

export default connect()(AddTodo);