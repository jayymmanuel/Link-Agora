import React, { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import EventBox from "../../../components/EventBox";
import SearchBar from "../../../components/Search Bar/SearchBar";
import EventData from "./EventData";

const UpcomingEvents = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Function to group events by month and year
  const groupEventsByMonth = () => {
    const groupedEvents = {};
    EventData.forEach(event => {
      const key = `${event.month} ${event.year}`;
      if (groupedEvents[key]) {
        groupedEvents[key].push(event);
      } else {
        groupedEvents[key] = [event];
      }
    });
    return groupedEvents;
  };

  // Check if there are more events after the current ones
  const hasMoreEvents = () => {
    const allEvents = EventData.length;
    const displayedEvents = Object.values(groupEventsByMonth()).flat().length;
    return allEvents > displayedEvents;
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center pt-[25rem]">
          <BarLoader color={"#476070"} loading={loading} size={100} />
        </div>
      ) : (
        <div className="w-full px-20">
          <div className="bg-zinc-900 p-8 sticky top-0 z-20">
            <h1 className="text-5xl font-semibold text-white uppercase text-center mt-24">
              Upcoming Events
            </h1>
            <p className="font-medium text-white text-center mt-4 mb-8">
              View all your upcoming events! Inform yourself and make your
              reservations.
            </p>
            <div className="px-32">
              <SearchBar />
            </div>
          </div>

          {/* Display events grouped by month */}
          {Object.entries(groupEventsByMonth()).map(([timeframe, events], index) => (
            <div key={index}>
              <div className="flex text-white items-center px-12">
                <p className="mr-4">{timeframe}</p>
                <hr className="my-12 h-0.5 border-t-0 bg-gray-300 opacity-100 dark:opacity-50 flex-grow" />
              </div>
              <div className="w-full flex flex-col gap-16 items-center justify-center">
                {events.map((event, eventIndex) => (
                  <EventBox
                    key={eventIndex}
                    weekDay={event.weekDay}
                    dayValue={event.dayValue}
                    timeline={event.timeline}
                    eventTitle={event.eventTitle}
                    eventDetails={event.eventDetails}
                    poster={event.poster}
                  />
                ))}
              </div>
            </div>
          ))}
          
          {/* Display message if there are no more events */}
          {!hasMoreEvents() && (
            <div className="text-center mt-8 text-zinc-400 p-20">
              You've reached the end
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
