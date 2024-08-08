import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const CalendlyData = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
    onPageHeightResize: (e) => console.log(e.data.payload.height),
  });

  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/baltrunaiteo/test" />
    </div>
  );
};

export default CalendlyData;