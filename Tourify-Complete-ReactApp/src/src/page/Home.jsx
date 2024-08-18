import React from 'react';
import { Container } from 'reactstrap';
import Footer from '../component/footer';
import Header from '../component/header';
import PropOwnerNavbar from '../component/navbar';
import Sidebar from '../component/sidebar';
function PropDashboard() {
    return (
      <>
       <Sidebar/>
        <div className="main-content">
            <PropOwnerNavbar className="ml-0" />
            <Header className="w-100" showCards={true}/>
            <Container fluid>
                <Footer className="footer"/>
            </Container>
        </div>
      </>
    );
}

export default PropDashboard;
