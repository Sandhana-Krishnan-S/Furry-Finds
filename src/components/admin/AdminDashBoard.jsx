import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users when the component mounts
        axios.get('http://localhost:8080/api/auth/get-all')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <div className="admin-dashboard">
            <nav className="navbar">
                <h1>Admin Dashboard</h1>
                <ul>
                    <li><a href="#products">Manage Products</a></li>
                    <li><a href="#users">Manage Users</a></li>
                    <li><a href="#orders">Manage Orders</a></li>
                </ul>
            </nav>

            <section id="products" className="section">
                <h2>Manage Products</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Premium Fish Food</td>
                            <td>$54.99</td>
                            <td>20</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        {/* Add more products as needed */}
                    </tbody>
                </table>
            </section>

            <section id="users" className="section">
                <h2>Manage Users</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.userId}>
                                <td>{user.userId}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section id="orders" className="section">
                <h2>Manage Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>User</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1001</td>
                            <td>john_doe</td>
                            <td>$109.98</td>
                            <td>Pending</td>
                            <td>
                                <button>View</button>
                                <button>Update Status</button>
                            </td>
                        </tr>
                        {/* Add more orders as needed */}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default AdminDashboard;
