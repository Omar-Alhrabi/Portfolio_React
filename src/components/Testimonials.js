import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      image: "./pic/New_avatar-10-1.png",
      name: "Moha'd Tamer",
      review: "Good developer, I recommend him to everyone"
    },
    {
      image: "./pic/New_avatar-8-1.png",
      name: "lama khalil",
      review: "Great work, I wish you continued success and progress in your work."
    },
    {
      image: "./pic/New_avatar-9-1.png",
      name: "Nabeel Osama",
      review: "Works perfectly, accurately and quickly. Thank you very much."
    }
  ];

  return (
    <section className="section4">
      <div className="Testimonial" id="Testimonial">
        <h2>Testimonial</h2>
        <div className="Teststar">
          {testimonials.map((testimonial, index) => (
            <div className="perscard" key={index}>
              <div className="persbox">
                <img src={testimonial.image} alt="personal" width="250" height="200" />
                <h3>{testimonial.name}</h3>
                <div className="rering">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star" style={{ color: "#ffcb0f" }}></i>
                  ))}
                </div>
                <p>{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
