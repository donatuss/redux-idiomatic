import React, {Component} from 'react';
import {Container, Grid, Divider} from 'semantic-ui-react';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

class TodoApp extends Component {

    render() {
        return (
            <div>
                <Container fluid>
                    <Divider/>
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <Footer/>
                        </Grid.Column>
                    </Grid>
                    <Grid centered columns={2} style={{position: 'relative', top: '-15px'}}>
                        <Grid.Column>
                            <AddTodo/>
                        </Grid.Column>
                    </Grid>
                </Container>
                <Container>
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <VisibleTodoList/>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default TodoApp;