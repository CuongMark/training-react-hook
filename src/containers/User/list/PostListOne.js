import React ,{Component} from "react";
import axios from 'axios';
import Table from 'react-bootstrap/table'
import AddUserForm from "./AddUserForm";
import Navbar from 'react-bootstrap/Navbar'
import EditForm from "./EditForm";
class PostListOne extends Component{
    constructor(props){
        super(props)

        this.state ={

            posts: [],
            seen :false,
        }


    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(response=> {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch( error => {
                console.log(error)
            })

    }
    delete = (array)=> {
        console.log(array)
        let sum = []
        array = [...this.state.posts]
        console.log(array)

        array.splice(array, 1)
        this.setState({posts: array}, () => {
            console.log(this.state.posts)

        })
    }


    edit = ()=>{


    }




    togglePopup =()=>{
        console.log(this.state.seen)
        this.setState({seen: !this.state.seen });
    }
    handlerSave =(data)=> {


        axios.post('https://jsonplaceholder.typicode.com/posts',data)
            .then(response=> {
                console.log(response)
                let sum =[];
                sum = [...this.state.posts]
                console.log(sum)
                sum.push(response.data)
                this.setState({posts: sum},()=>{
                    console.log(this.state.posts)
                })
            })
            .catch( error => {
                console.log(error)
            })
    }


    render()
    {
        const {posts} = this.state

        return(
            <div>
                <div className="container">

                    <h2>USER MANAGEMENT</h2>
                    <button className="btn btn-dark" onClick={this.togglePopup}>Add New Employee</button>
                    {this.state.seen ? <AddUserForm handlerFormSave = {this.handlerSave}/>:null}
                        {/*<button className="btn btn-danger">Delete</button>*/}

                    <Table striped bordered hover>
                        <table>
                            <thead className="thead-light">
                            <tr>
                                <th>
                                    <span className="custom-checkbox"></span>
                                    <input className="custom-checkbox" type="checkbox"/>

                                </th>
                                <th>
                                    UserId
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Body
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            {
                                posts.length ?
                                    posts.map((p,i)=>
                                        <tr key = {p.id}>
                                            <td>

                                                <input className="custom-checkbox" type="checkbox"/>

                                            </td>
                                            <td>
                                                {p.id}
                                            </td>
                                            <td>
                                                {p.name}
                                            </td>
                                            <td>
                                                {p.email}
                                            </td>
                                            <td>
                                                {p.body}
                                            </td>
                                            <td width= "15%">
                                                <a className="btn btn-primary" onClick={()=>this.edit(i)}>Edit</a>
                                                <a className="btn btn-danger" onClick={()=>this.delete(i)}>Delete</a>
                                            </td>
                                        </tr>
                                    ): null
                            }
                        </table>
                    </Table>
                </div>
            </div>
        )
    }
}
export default PostListOne;