import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchRegistrations = () => {
    const [registrations, setRegistrations] = useState([]);
    const [formData, setFormData] = useState({ name: '', role: '', email: '', password: '' });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/retrieve`);
            setRegistrations(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const updateData = async (id) => {
        try {
            await axios.put(`http://localhost:8080/users/${id}`, formData);
            fetchData();
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/users/${id}`);
            fetchData();
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <center>
            <h1>Registrations</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {registrations.map((item, index) => (
                        <tr key={index}>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>
                                <input type='text' name='name' placeholder='New Name' onChange={onChangeHandler} />
                                <input type='text' name='role' placeholder='New Role' onChange={onChangeHandler} />
                                <input type='text' name='email' placeholder='New Email' onChange={onChangeHandler} />
                                <input type='password' name='password' placeholder='New Password' onChange={onChangeHandler} />
                                <button onClick={() => updateData(item._id)}>Update</button>
                                <button onClick={() => handleDelete(item._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
    );
};

export default FetchRegistrations;
