import React from "react";
import CommonSection from "../shared/CommonSection";
import { BASE_URL } from "../utils/config";

const Bookings = () => {
  const bookings = 
    useFetch(`${BASE_URL}/bookings`, {
      method: "get",
      headers: { "content-type": "application/json" },
      credentials: "include",
    });
  
  console.log(bookings);
  return (
    <>
      <CommonSection title={"Bookings"} />
      {/* {bookings?.map((book)=>{<div>{book}</div>})}; */}
      <Container>
        <Row>{
          data.length === 0 ? (
<h4 className="text-center">No tour found</h4>
          )  :(
            data?.map(tour => (
              <Col lg="3" className="mb-4" key={tour._id}>
                <TourCard tour={tour} />
              </Col>
            ))
          )
           }
        </Row>
      </Container>
    </>
  );
};

export default Bookings;
