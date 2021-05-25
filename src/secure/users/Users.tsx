import axios from 'axios';
import React, {Component} from 'react'
import { User } from '../../classes/user';
import Wrapper from '../Wrapper'

class Users extends Component {
    state = {
        users: []
    }
    page = 1;
    last_page = 0;

    componentDidMount = async () => {
        const response = await axios.get("users");
        console.log(response)

        this.setState({
            users: response.data.data
        });
    }

    render() {
        return (
            <Wrapper>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
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
                                    </tr>
                                )
                            }
                        )}
                        </tbody>
                    </table>
                </div>
            </Wrapper>
        )
    }
}


export default Users;
