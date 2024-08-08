import React, { useEffect, useState } from 'react';
import { PopupWidget } from "react-calendly";

const Booking = () => {
  const [eventTypes, setEventTypes] = useState([]);

  return (
    <div>
      <h2>Book a Service</h2>

      <div>
        <PopupWidget
          url="https://calendly.com/baltrunaiteo/test"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
          text="Book now!"
          textColor="#ffffff"
          color="#00a2ff"
        />
      </div>

    </div>
  );
};

export default Booking;
