import axios from 'axios';
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { User } from '../../classes/user';
import Wrapper from '../Wrapper'

class Users extends Component {
    state = {
        users: []
    }
    page = 1;
    last_page = 0;

    componentDidMount = async () => {
        const response = await axios.get(`users?page=${this.page}`);
        console.log(response)

        this.setState({
            users: response.data.data
        });
        this.last_page = response.data.meta.last_page;
    }
    previous = async () => {
        if(this.page===1) return;
        this.page--;
        await this.componentDidMount();
    }

    next = async() => {
        if(this.page===this.last_page) return;
        this.page++;
        await this.componentDidMount();
    }
    

    render() {
        return (
            <Wrapper>
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to={'/users/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map(
                            (user: User) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.first_name} {user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role.name}</td>
                                        <td>
                                            <div className="btn-group mr-2">
                                                <a href="#" className="btn btn-sm btn-outline-secondary">Edit</a>
                                                <a href="#" className="btn btn-sm btn-outline-secondary">Delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        )}
                        </tbody>
                    </table>
                </div>
                <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" onClick={this.previous}>Previous</a>
                    </li>
                    <li className="page-item">
                        <a  className="page-link" onClick={this.next} >Next</a>
                    </li>
                </ul>
            </nav>
            </Wrapper>
        )
    }
}


export default Users;
