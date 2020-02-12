import React, { createRef } from 'react';
import Modal from 'react-bootstrap/Modal'

function AddUserForm({handlerFormSave, data: {id, name, email, body}}) {
    const userIdRef = createRef();
    const nameRef = createRef();
    const emailRef = createRef();
    const bodyRef = createRef();

    const onsubmitHandler = (e) => {
        e.preventDefault();
        const data = {
            id: userIdRef.current.value,
            name: nameRef.current.value,
            email: emailRef.current.value,
            body: bodyRef.current.value
        };
        handlerFormSave(data);
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
                        <input type="text" placeholder="UserId" defaultValue={id} ref={userIdRef}/>
                    </div><br/>
                    <div>Name:
                        <input type="text" placeholder="Name" defaultValue={name} ref={nameRef}/>
                    </div><br/>
                    <div>Email:
                        <input type="text" placeholder="Email" defaultValue={email} ref={emailRef}/>
                    </div><br/>
                    <div>Body:
                        <input type="text" placeholder="Body" defaultValue={body} ref={bodyRef}/>
                    </div><br/>
                    <input type="submit" value="Save" className= " btn btn-primary" />
                </form>
            </Modal.Body>
        </Modal.Dialog>
    )
}

export default AddUserForm;