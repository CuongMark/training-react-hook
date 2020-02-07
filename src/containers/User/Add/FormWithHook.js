import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'

function AddUserForm(props) {
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [introduce, setIntroduce] = useState('');

    const userChange = (e) => {
        setUserId(e.target.value)
    };
    const nameChange = (e) => {
        setName(e.target.value)
    };
    const emailChange = (e) => {
        setEmail(e.target.value)
    };
    const introduceChange = (e) => {
        setIntroduce(e.target.value)
    };

    const onsubmitHandler = (e) => {
        e.preventDefault();
        const data = {id: userId, name, email, introduce};
        props.handlerFormSave(data);
        return false;
    };

    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Employee Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={onsubmitHandler}>
                    <div>UserId:
                        <input type="text" placeholder="UserId" defaultValue={userId} onChange={userChange}/>
                    </div><br/>
                    <div>Name:
                        <input type="text" placeholder="Name" defaultValue={name} onChange={nameChange}/>
                    </div><br/>
                    <div>Email:
                        <input type="text" placeholder="Email" defaultValue={email} onChange={emailChange}/>
                    </div><br/>
                    <div>Body:
                        <input type="text" placeholder="Body" defaultValue={introduce} onChange={introduceChange}/>
                    </div><br/>
                    <input type="submit" value="Save" className= " btn btn-primary" />
                </form>
            </Modal.Body>
        </Modal.Dialog>
    )
}

export default AddUserForm;