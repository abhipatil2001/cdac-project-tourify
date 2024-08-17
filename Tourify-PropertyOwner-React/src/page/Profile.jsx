import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import avatarImage from '../assets/img/theme/img2.png';
import Sidebar from '../component/sidebar';
import '../styles/tourify.css';
import UserHeader from '../component/userHeader';
import { Container, Table } from 'reactstrap';
import Footer from '../component/footer';
import { toast } from 'react-toastify';

export default function Profile() {
    const [profile, setProfile] = useState({});
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        // Fetch the profile data only once when the component mounts
        axios.get(`${config.url}/propertyOwner/profile`, {
            headers: {
                'token': token
            }
        })
        .then(response => {
            if (response.data.status === 'success') {
                setProfile(response.data.data); // Set the profile data
            } else {
                toast.error("Failed to fetch profile data!");
            }
        })
        .catch(error => {
            toast.error("There was an error fetching the profile data!");
            console.error(error);
        });
    }, [token]); // Dependency array contains only `token`, so the effect runs only on mount and when `token` changes

    return (
        <>
            <UserHeader/>
            <Sidebar/>
            <div className='main-content'>
                <Container fluid className="mt--7">
                    <div className="row justify-content-center">
                        <div className="col-lg-8"></div>
                        <div className="col-lg-11">
                            <div className="card profile-card mb-4">
                                <div className="card-body text-center">
                                    <img
                                        src={avatarImage}
                                        alt="avatar"
                                        className="rounded-circle img-fluid"
                                        style={{ width: "150px" }}
                                    />
                                    <h5 className="my-3">{profile.name || 'Name not available'}</h5>
                                    <p className="text-muted mb--1">Property Owner</p>
                                    <p className="text-muted mb-2">{profile.address || 'Address not available'}</p>
                                    <div>
                                        <button type="button" className="btn btn-info mb-3">Edit Profile</button>
                                    </div>
                                    <h6 className="heading-small mt-3 mb-3">Personal Information</h6>
                                    <Table bordered hover>
                                        <tbody>
                                            <tr>
                                                <td className="fw-bold">Name</td>
                                                <td>{profile.name || 'Name not available'}</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-bold">Location</td>
                                                <td>{profile.address || 'Address not available'}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <div className="mt-4">
                                        <h6 className="heading-small mb-3">Contact Information</h6>
                                        <Table bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td className="fw-bold">Email</td>
                                                    <td>{profile.email || 'Email not available'}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold">Phone</td>
                                                    <td>{profile.phone || 'Phone not available'}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bold">Created at</td>
                                                    <td>{profile.created_at || 'Creation date not available'}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8"></div>
                    </div>
                    <Footer className="footer"/>
                </Container>
            </div>
        </>
    );
}
