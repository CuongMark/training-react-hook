import React, {useState, useEffect} from "react";
import {Table} from 'react-bootstrap';
import axios from 'axios';
import AddUserForm from "../Add/FormWithHookAndCreateRef";

function UserList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
       let ignore = false;
       async function fetchData() {
           const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/100/comments');
           if (!ignore) setPosts(data);
       }
       fetchData();
       return () => {ignore = true}
    }, []);

    const [showEditPopup, setShowEditPopup] = useState(false);
    const [editingPost, setEditingPost] = useState({});

    const togglePopup = () => {
        setShowEditPopup(!showEditPopup)
    };
    const editHandle = (id) => {
        setShowEditPopup(true);
        setEditingPost(posts.find(post => post.id === id))
    };
    const deleteHandle = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    };

    const handlerSave = (data) => {
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(response => {
                console.log(response);
                console.log('post successfully')
            }).catch( error => {
                console.log(error)
            })
    };

    return (
        <div className="container">
            <h2>USER MANAGEMENT</h2>
            <button className="btn btn-dark" onClick={togglePopup}>Add New Employee</button>
            {showEditPopup ? <AddUserForm handlerFormSave={handlerSave} data={editingPost}/>:null}
            <Table striped bordered hover>
                <tr>
                    <th/>
                    <th>UserId</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                    <th>Actions</th>
                </tr>
                {
                    posts.length ?
                        posts.map((post, index)=>
                            <tr key = {index}>
                                <td><input className="custom-checkbox" value={post.id} type="checkbox"/></td>
                                <td>{post.id}</td>
                                <td>{post.name}</td>
                                <td>{post.email}</td>
                                <td>{post.body}</td>
                                <td width= "15%">
                                    <button className="btn btn-primary" onClick={() => editHandle(post.id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => deleteHandle(post.id)}>Delete</button>
                                </td>
                            </tr>
                        ): null
                }
            </Table>
        </div>
    )
}

export default UserList