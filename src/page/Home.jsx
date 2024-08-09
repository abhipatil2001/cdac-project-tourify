import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../component/footer';
import Header from '../component/header';
import PropOwnerNavbar from '../component/navbar';
import Sidebar from '../component/sidebar';
import Slider from "react-slick";
function Home() {
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

export default Home;
