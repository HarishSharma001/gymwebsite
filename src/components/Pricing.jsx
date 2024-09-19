import React from "react";
import { Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  const handlePayment = () => {
    const options = {
      key: "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in currency subunits. 50000 means INR 500
      currency: "INR",
      name: "Dummy Company",
      description: "Test Transaction",
      image: "https://example.com/logo.png", // Optional
      order_id: "order_DummyOrderID", // Replace with a valid order ID from your backend or a mock order ID
      handler: function (response) {
        alert(
          `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Sample Address",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const pricing = [
    {
      imgUrl: "/price2.jpg",
      title: "QUATERLY",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: "/price2.jpg",
      title: "HALF_YEARLY",
      price: 32000,
      length: 6,
    },
    {
      imgUrl: "/price2.jpg",
      title: "YEARLY",
      price: 60000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>NEW FITNESS CLUB PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={"element.title"} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check />
                  Equipment
                </p>
                <p>
                  <Check />
                  All Day Free Training
                </p>
                <p>
                  <Check />
                  Free Restroom
                </p>
                <p>
                  <Check />
                  24/7 Skilled Support
                </p>
                <p>
                  <Check />
                  20 Days Freezing Option
                </p>
                <Link to={"/"} onClick={handlePayment}>
                  Join Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
