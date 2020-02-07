import React ,{Component} from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal'
class AddUserForm extends Component{
    constructor(props){
        super(props)


        this.state ={
            userId : null,
            name : "",
            email : "",
            body : ""
        }

        this.handlerSave = this.handlerSave.bind(this)
        this.UserChange = this.UserChange.bind(this)
        this.NameChange = this.NameChange.bind(this)
        this.EmailChange = this.EmailChange.bind(this)
        this.BodyChange = this.BodyChange.bind(this)
    }
    UserChange =(e)=>{
        this.setState({userId: e.target.value })
    }
    NameChange =(e)=>{
        this.setState({name: e.target.value})
    }
    EmailChange =(e)=>{
        this.setState({email: e.target.value})
    }
    BodyChange =(e)=>{
        this.setState({body:e.target.value})
    }

    handlerSave =(e)=> {
        e.preventDefault()
        let data = {
            userId: this.state.userId,
            name: this.state.name,
            email: this.state.email,
            body: this.state.body
        }
        console.log(data)

        this.props.handlerFormSave(data)



    }



    render(){
        return(
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Employee Information</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={this.handlerSave}>
                        <div>UserId:
                            <input type="text" placeholder="UserId" onChange={this.UserChange}/>
                        </div><br/>
                        <div>Name:
                            <input type="text" placeholder="Name" onChange={this.NameChange}/>
                        </div><br/>
                        <div>Email:
                            <input type="text" placeholder="Email" onChange={this.EmailChange}/>
                        </div><br/>
                        <div>Body:
                            <input type="text" placeholder="Body" onChange={this.BodyChange}/>
                        </div><br/>
                        <input type="submit"value="Save" className= " btn btn-primary" />
                    </form>
                </Modal.Body>

                {/*<Modal.Footer>*/}
                {/*    <Button variant="secondary">Close</Button>*/}
                {/*    <Button variant="primary">Save changes</Button>*/}
                {/*</Modal.Footer>*/}
            </Modal.Dialog>

        )
    }
}

export default AddUserForm