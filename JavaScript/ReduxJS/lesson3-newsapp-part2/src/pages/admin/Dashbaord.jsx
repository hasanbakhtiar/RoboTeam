import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

function Dashbaord() {
    const newsdata = useSelector(p => p);
    return (
        <>
            <h1 className='text-center my-5'>Admin Panel</h1>
            <LinkContainer to="add"><Button variant='dark mb-3'>ADD</Button></LinkContainer>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {newsdata.map((item, count) => (
                        <tr key={count}>
                            <td>{count + 1}</td>
                            <td><img width={100} src={item.photo} alt={item.title} /></td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td><Button variant='warning'>Edit</Button></td>
                            <td ><Button variant="danger">X</Button></td>
                        </tr>
                    ))}


                </tbody>
            </Table>

        </>
    );
}

export default Dashbaord;