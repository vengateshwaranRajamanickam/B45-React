import {Alert, Container,Col,Row,Button} from 'reactstrap'
import { REMOVE_TODO,ADD_TODO_INPROGRESS,ADD_TODO_COMPLETED } from './Actiontype';
import { TodoContext } from './Context';
import { useContext } from 'react';
export default function List(){
    const { state, dispatch } = useContext(TodoContext);
    return(
  <Container className='mt-4'>
    <Row>
    <Col  className='mt-2'xs={12} md={4}>
          <h3 className='listtitle'>All Todos</h3>
          {state.todo.map((value) => {
            return (
              <Alert color="primary" key={value.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  {value.value}
                  <Button
                    onClick={() =>
                      dispatch({ type: ADD_TODO_INPROGRESS, payload: value.id })
                    }
                    color="primary"
                  >
                    Mark as In Progress
                  </Button>
                </div>
              </Alert>
            );
          })}
        </Col>
        <Col className='mt-2' xs={12} md={4}>
        <h3 className='listtitle2'>Inprogress Todos</h3>
          {state.inprogress.map((progress) => {
            return (
              <Alert color="info" key={progress.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    aligntext: "center"
                  }}
                >
                 {progress.value}
                  <Button
                    onClick={() =>
                      dispatch({ type: ADD_TODO_COMPLETED, payload: progress.id })
                    }
                    color="info"
                  >
                    Mark as Completed
                  </Button>
                </div>
              </Alert>
            );
          })}
        </Col>
        <Col className='mt-2' xs={12} md={4}>
        <h3 className='listtitle3'>Selected Todos</h3>
          {state.completed.map((value) => {
            return (
              <Alert color="success" key={value.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  {value.value}
                  <Button
                    onClick={() =>
                      dispatch({ type: REMOVE_TODO, payload: value.id })
                    }
                    color="success"
                  >
                    Remove
                  </Button>
                </div>
              </Alert>
            );
          })}
        </Col>
        </Row>
        </Container>
    )
}