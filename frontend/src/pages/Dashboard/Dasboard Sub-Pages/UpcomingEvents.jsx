import React from "react";
import EventBox from "../../../components/EventBox";
import SearchBar from "../../../components/Search Bar/SearchBar";

import image from "../../../assets/event1poster.jpg";
import image2 from "../../../assets/event2poster.jpeg";
import image3 from "../../../assets/event3poster.jpeg";

const UpcomingEvents = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fafbfd]">
      <div className="w-full">
          {/* Fixed Page Header Content */}
        <div className="bg-[#fafbfd] p-4 sticky top-0 z-20">
          <h1 className="text-5xl font-semibold text-black uppercase text-center mt-20">
            Upcoming Events
          </h1>
          <p className="font-medium text-black text-center mt-4 mb-8">
            View all your upcoming events! Inform yourself and make your
            reservations.
          </p>
          <div className="px-28">
          <SearchBar />
          </div>
        </div>
          {/* End of Fixed Page Header Content */}


        <div className="px-28">

        <div class="flex items-center pr-24">
          <p class="mr-4">October 2023</p>
          <hr class="my-12 h-0.5 border-t-0 bg-gray-300 opacity-100 dark:opacity-50 flex-grow" />
        </div>

        <EventBox
          weekDay="Mon"
          dayValue="4"
          timeline="4 October 2023 @ 6:30 pm - 7:30 pm"
          eventTitle="POLICY DISCUSSION: DISCUSSING SOUTH AFRICA’S DRAFT COUNTRY INVESTMENT STRATEGY"
          eventDetails="The Black Management Forum is pleased to invite you to the 7th Annual Don Mkhwanazi Lecture presented by Bonang Mohale."
          poster={image}
        />

        <EventBox
          weekDay="TUE"
          dayValue="5"
          timeline="5 October 2023 @ 6:00 pm - 7:15 pm"
          eventTitle="POLICY DISCUSSION: DISCUSSING SOUTH AFRICA’S DRAFT COUNTRY INVESTMENT STRATEGY"
          eventDetails="The Black Management Forum is pleased to invite you to the 7th Annual Don Mkhwanazi Lecture presented by Bonang Mohale."
          poster={image2}
        />

        <EventBox
          weekDay="WED"
          dayValue="6"
          timeline="6 October 2023 @ 6:30 pm - 7:30 pm"
          eventTitle="POLICY DISCUSSION: DISCUSSING SOUTH AFRICA’S DRAFT COUNTRY INVESTMENT STRATEGY"
          eventDetails="The Black Management Forum is pleased to invite you to the 7th Annual Don Mkhwanazi Lecture presented by Bonang Mohale."
          poster={image3}
        />

        <EventBox
          weekDay="THU"
          dayValue="7"
          timeline="7 October 2023 @ 6:30 pm - 7:30 pm"
          eventTitle="POLICY DISCUSSION: DISCUSSING SOUTH AFRICA’S DRAFT COUNTRY INVESTMENT STRATEGY"
          eventDetails="The Black Management Forum is pleased to invite you to the 7th Annual Don Mkhwanazi Lecture presented by Bonang Mohale."
          poster={image}
        />
        </div>

      </div>
    </div>
  );
};

export default UpcomingEvents;
