import React, { useState } from "react";
import { Button, Col, Form, InputGroup, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./feature/todoSlice";

const App: React.FC = () => {
    const tododata:any = useSelector((p:any)=>p.todos);
    const dispatch:any = useDispatch();
    const [value,setValue] = useState("");
    const todoSubmited = (e:React.FormEvent)=>{
            e.preventDefault();
            dispatch(add(value));
            setValue("");
    }
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="my-5 text-danger">Todo App</h1>
     <Col md={4}>
     <Form onSubmit={todoSubmited}>
        <InputGroup className="mb-3">
          <Form.Control
          onChange={(e)=>{setValue(e.target.value)}}
            placeholder="Enter todo"
            value={value}
          />
          <Button variant="outline-success" type="submit">
            Add
          </Button>
        </InputGroup>
      </Form>
      <ListGroup>
        {tododata.map((item:any)=>(

      <ListGroup.Item className="myanimation d-flex justify-content-between align-items-center" key={item.id}>{item.title} <Button className="btn btn-danger" onClick={()=>{dispatch(remove(item.id))}}>X</Button></ListGroup.Item>
        ))}
     
    </ListGroup>
    <Button variant="btn btn-dark mt-2">Clear All</Button>
     </Col>
    </div>
  );
};

export default App;
