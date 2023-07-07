import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autolay: true,
    speed: 1000,
    swipeToSide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <div className="testimonial py-4 px-3">
          <p>
          I'd be happy to provide feedback on your tour website! However, since I'm an AI language model and cannot directly access or browse websites, I'll need you to describe the key aspects or provide specific details about your website. Please share the elements you'd like me to evaluate, such as design, user experience, content, navigation, or any other specific areas of interest.
          </p>
          <div className="d-flex align-item-center gap-4 mt-3">
            <img src={ava01} style={{'width':'25%'}} className="w-35 h-25 rounded-2" alt="" />
            <div>
              <h6 classNmae="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
          I'm unable to browse the internet or access specific websites. To provide feedback, please describe the key elements or features of your tour website that you would like me to evaluate. This could include aspects such as design, navigation, content, user experience, or any specific areas you'd like feedback on.
          </p>
          <div className="d-flex align-item-center gap-4 mt-3">
            <img src={ava02} style={{'width':'25%'}} className="w-35 h-25 rounded-2" alt="" />
            <div>
              <h6 classNmae="mb-0 mt-3">Lia Franklin </h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="testimonial py-4 px-3">
          <p>
          Instead, I can offer general advice and suggestions to improve the overall user experience and effectiveness of your tour website. Please provide me with some specific aspects or features you'd like me to focus on, and I'll provide feedback based on that information.
          </p>
          <div className="d-flex align-item-center gap-4 mt-3">
            <img src={ava03} style={{'width':'25%'}} className="w-35 h-25 rounded-2" alt="" />
            <div>
              <h6 classNmae="mb-0 mt-3">John Doe</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Testimonial;
