import React, {useState,useEffect}from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import tourData from "../assets/data/tours";
import { Col, Row, Container } from "reactstrap";
import useFetch from '../hooks/useFetch'
import {BASE_URL} from "../utils/config"

const Tour = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page,setPage] = useState(0)

  const {data:tours, loading,error} = useFetch(`${BASE_URL}/tours?page=${page}`)
  const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`)

  useEffect(()=>{

    const pages = Math.ceil(tourCount/8);
    setPageCount(pages);
    window.scrollTo(0,0)

  },[page,tourCount,tours])

  return (
    <>
      <CommonSection title={"About"} />
      <section>
        <Container>
          <Row>
            <h2>Features</h2>
            <p>
            •	Our travel guide website provide a user-friendly interface that is easy to navigate and search. <br/><br/>
•	It  provide up-to-date information about the destination, including opening hours, admission fees, and special events. Interactive maps and virtual tours can also be useful features to help travelers explore the destination before they arrive.<br/><br/>
•	Travel guide website is social proof, such as user reviews and ratings. This can help travelers make informed decisions about which attractions to visit and which hotels to stay in.<br/><br/>
•	Provide insider recommendations and suggestions for popular destinations.<br/>
            </p>
          </Row>
        </Container>
      </section>
      
      <Newsletter/>
    </>
  );
};

export default Tour;
