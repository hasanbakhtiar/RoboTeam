import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { removeNews, removeNewsFromDatabase } from '../../manager/actions/newsAction';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

function Dashbaord() {
    const newsdata = useSelector(p => p);
    const dispatch = useDispatch();
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
                            <td><Link to={`edit/${slugify(item.title)}`}><Button variant='warning'>Edit</Button></Link></td>
                            <td ><Button onClick={() => { dispatch(removeNewsFromDatabase( item.id )) }} 
                            variant="danger">X</Button></td>
                        </tr>
                    ))}


                </tbody>
            </Table>

        </>
    );
}

export default Dashbaord;