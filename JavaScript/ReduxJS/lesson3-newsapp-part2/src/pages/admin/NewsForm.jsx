import { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewsForm({sendValue}) {
    const [photo,setPhoto] = useState('');
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');

    
    const newsSubmited =event=>{
        event.preventDefault();
        sendValue({
            myphoto:photo,
            mytitle:title,
            mydesc:desc,
        })
    }
    return (
        <Form onSubmit={newsSubmited}>
         
            <Form.Group className="mb-3" >
                <Form.Label>Photo</Form.Label>
                <Form.Control onChange={e=>{setPhoto(e.target.value)}} type="text" placeholder="Enter photo url" />

            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={e=>{setTitle(e.target.value)}} type="text" placeholder="Enter title" />

            </Form.Group>

            <FloatingLabel controlId="floatingTextarea2" label="Description">
                <Form.Control
                    as="textarea"
                    onChange={e=>{setDesc(e.target.value)}}
                    style={{ height: '100px', "margin-bottom": "20px" }}
                />
            </FloatingLabel>
            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>
    );
}

export default NewsForm;