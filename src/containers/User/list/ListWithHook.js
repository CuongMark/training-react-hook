import React, {useState} from "react";
import {Table} from 'react-bootstrap';
import AddUserForm from "../Add/FormWithHookAndCreateRef";

function UserList() {
    const [posts, setPosts] = useState([]);
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
        let isUpdate = false;
        const newPosts = posts.map(post => {
            if (post.id === data.id) {
                isUpdate = true;
                return data
            }
            return post
        });
        if (!isUpdate) {
            newPosts.push(data)
        }
        setShowEditPopup(false);
        setPosts(newPosts);
    };

    return (
        <div className="container">
            <h2>USER MANAGEMENT</h2>
            <button className="btn btn-dark" onClick={togglePopup}>Add New Employee</button>
            {showEditPopup ? <AddUserForm handlerFormSave={handlerSave} data={editingPost}/>:null}

            <Table striped bordered hover>
                <thead className="thead-light">
                <tr>
                    <th/>
                    <th>UserId</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                    <th>Actions</th>
                </tr>
                </thead>
                {
                    posts.length ?
                        posts.map((post)=>
                            <tr key = {post.id}>
                                <td><input className="custom-checkbox" value={post.id} type="checkbox"/></td>
                                <td>{post.id}</td>
                                <td>{post.name}</td>
                                <td>{post.email}</td>
                                <td>{post.introduce}</td>
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