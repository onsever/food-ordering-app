import React from "react";
import Title from "../ui/Title";
import FeedbackItem from "./FeedbackItem";

const Feedback = () => {
  return (
    <div className="container mx-auto my-10">
      <Title className="text-[2.5rem] text-center">
        What Says Our Customers
      </Title>
      <div className="flex gap-x-10">
        <FeedbackItem img="/images/client1.jpg" />
        <FeedbackItem img="/images/client2.jpg" />
      </div>
    </div>
  );
};

export default Feedback;
