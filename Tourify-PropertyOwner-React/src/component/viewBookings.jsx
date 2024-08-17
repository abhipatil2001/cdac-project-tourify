import { Card, CardHeader, Container, Row, Table } from "react-bootstrap";
import { toast } from 'react-toastify';
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { bookings as fetchBookings } from "../services/bookings";
import { useEffect, useState } from "react";
import { format } from "date-fns/format";

function ViewBookings() {
    const [bookings, setBookings] = useState([]); // Correct state initialization
    const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('ownerId');

    useEffect(() => {
        const fetchBookingsData = async () => {
            try {
                const result = await fetchBookings({ userId, token }); // Correct function call
                if (result.status === 'success') {
                    setBookings(result.data); // Set bookings data
                    console.log(result.data);
                } else {
                    toast.error(result.message || "Failed to fetch bookings!");
                }
            } catch (error) {
                toast.error("An error occurred while fetching bookings!");
                console.error(error);
            }
        };

        fetchBookingsData();
    }, [userId, token]); // Dependencies array

    const statusColors = {
        'Confirmed': 'rgb(0, 199, 0)',
        'Pending': 'yellow',
        'Cancelled': 'red'
    };


    const formatDate = (dateString)=>{
        return format(new Date(dateString), 'MMMM dd, yy')
    };

    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Header showCards={true} />
                <Container fluid className="mt--7">
                    <Row>
                        <div className="col">
                            <Card className="bg-default shadow">
                                <CardHeader className="bg-transparent border-0">
                                    <h3 className="text-white mb-0">Bookings</h3>
                                </CardHeader>
                                <Table className="align-items-center table-dark table-flush" responsive>
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">From Date</th>
                                            <th scope="col">To Date</th>
                                            <th scope="col">Property</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Bill</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookings.map((booking) => (
                                            <tr key={booking.id}>
                                                <td style={{backgroundColor: "#172b4d"}}>{booking.name}</td>
                                                <td style={{backgroundColor: "#172b4d"}}>{formatDate(booking.from_date)}</td>
                                                <td style={{backgroundColor: "#172b4d"}}>{formatDate(booking.to_date)}</td>
                                                <td style={{backgroundColor: "#172b4d"}}>{booking.title}</td>
                                                <td style={{backgroundColor: "#172b4d"}}>
                                                    <span className="mr-2" 
                                                    style={{display:"inline-block", width: "10px", height:"10px", borderRadius:"50%",
                                                          backgroundColor: statusColors[booking.status] || "gray"
                                                     }}
                                                    ></span>{booking.status}</td>
                                                <td style={{backgroundColor: "#172b4d"}}>{booking.bill}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card>
                        </div>
                    </Row>
                    <Footer className="footer" />
                </Container>
            </div>
        </>
    );
}

export default ViewBookings;
