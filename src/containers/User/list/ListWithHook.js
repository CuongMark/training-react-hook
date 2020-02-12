import React, {useState, useEffect} from "react";
import {Table} from 'react-bootstrap';
import AddUserForm from "../Add/FormWithHookAndCreateRef";
import {getUsers, updateUser, addUser, deleteUser} from "../../../services/users";

function UserList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
       let ignore = false;
       // TODO fetch users from server
       async function fetchData() {
           const {data} = await getUsers();
           if (!ignore) setPosts(data.data);
       }
       fetchData();
       return () => {ignore = true}
    }, []);

    const [showEditPopup, setShowEditPopup] = useState(false);
    const [editingPost, setEditingPost] = useState({});

    const togglePopup = () => {
        setShowEditPopup(!showEditPopup)
    };
    const editHandle = async (id) => {
        setShowEditPopup(true);
        setEditingPost(posts.find(post => post.id === id))
    };
    const deleteHandle = async (id) => {
        await deleteUser(id);
        // TODO fetch users from server to update users lists
        loadUsersData();
    };

    const handlerSave = async (data) => {
        // TODO send data to server
        if (data.id) { // check if hast user id update, if not add new
            await addUser(data)
        } else {
            await updateUser(data)
        }
        // TODO fetch users from server to update users lists
        loadUsersData();
    };

    const loadUsersData = async () => {
        const response = await getUsers();
        setPosts(response.data.data)
    };

    return (
        <div className="container">
            <h2>USER MANAGEMENT</h2>
            <button className="btn btn-dark" onClick={togglePopup}>Add New Employee</button>
            {showEditPopup ? <AddUserForm handlerFormSave={handlerSave} data={editingPost}/>:null}
            <Table striped bordered hover>
                <tbody>
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
                </tbody>
            </Table>
        </div>
    )
}

export default UserList