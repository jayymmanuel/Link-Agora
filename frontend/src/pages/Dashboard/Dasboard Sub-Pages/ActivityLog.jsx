import React, { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import { PenLine } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import TimelineItem from "../../../components/Activity/TimelineItem";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

const ActivityLog = () => {
  const [loading, setLoading] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Sample data for TimelineItems
  const timelineData = [
    {
      date: "2023-10-08",
      time: "10:20 pm",
      icon: <PenLine size={16} className="text-white" />,
      user: "Jasmine Ming • Admin",
      message:
        "Approved an event request by Ethan Kior scheduled for the 2023-03-22",
    },
    {
      date: "2023-10-08",
      time: "12:35 pm",
      icon: <PenLine size={16} className="text-white" />,
      user: "Joachim Anderson • Admin",
      message:
        "Approved an event request by Ethan Kior scheduled for the 2023-03-22",
    },
    {
      date: "2023-10-10",
      time: "3:15 pm",
      icon: <CalendarCheck size={16} className="text-white" />,
      user: "John Doe • User",
      message: "Completed a task on 2023-02-10",
    },
    {
      date: "2023-10-17",
      time: "2:15 pm",
      icon: <CalendarCheck size={16} className="text-white" />,
      user: "Jane Doe • User",
      message: "Completed a task on 2023-02-10",
    },
    // Add more objects with unique data for additional TimelineItems
    {
      date: "2023-11-08",
      time: "10:20 pm",
      icon: <PenLine size={16} className="text-white" />,
      user: "Rashad McCants • Admin",
      message:
        "Declined an event request by Ethan Kior scheduled for the 2023-03-22",
    },
    {
      date: "2023-11-08",
      time: "12:35 pm",
      icon: <PenLine size={16} className="text-white" />,
      user: "Johsiah Johnson • Admin",
      message:
        "Flagged an event request by Ethan Kior scheduled for the 2023-03-22",
    },
    {
      date: "2023-11-10",
      time: "3:15 pm",
      icon: <CalendarCheck size={16} className="text-white" />,
      user: "Brandon Jennings • User",
      message: "Completed a task on 2023-02-10",
    },
    {
      date: "2023-11-17",
      time: "2:15 pm",
      icon: <CalendarCheck size={16} className="text-white" />,
      user: "Gilbert Areans • User",
      message: "Completed a task on 2023-02-10",
    },
  ];

  // Group timeline data by month and year
  const groupedTimelineData = timelineData.reduce((groups, item) => {
    const itemDate = new Date(item.date);
    const year = itemDate.getFullYear();
    const month = itemDate.getMonth() + 1; // Months are zero-indexed

    const key = `${year}-${month}`;

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(item);

    return groups;
  }, {});

  // Get timeline data for the current and previous months
  const currentMonthKey = `${currentMonth.getFullYear()}-${
    currentMonth.getMonth() + 1
  }`;
  const currentMonthData = groupedTimelineData[currentMonthKey] || [];

  return (
    <div className="flex flex-col h-full bg-[#fafbfd]">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <BarLoader color={"#01663E"} loading={loading} size={150} />
        </div>
      ) : (
        <div className="flex flex-col flex-grow">
          {/* Fixed Page Header Content */}
          <div className="bg-[#1f2937] p-4 sticky top-0 z-20">
            <h1 className="text-5xl font-semibold text-white uppercase text-center mt-20">
              Activity Log
            </h1>
            <p className="font-medium text-white text-center mt-4">
              View all your upcoming events! Inform yourself and make your
              reservations.
            </p>
            {/* Control Activity Stream */}
            <div className="flex items-center justify-center mt-4 mb-4">
              {/* Current Month */}
              <p className="font-medium text-white">
                {currentMonth.toLocaleString("default", { month: "long" })}{" "}
                {currentMonth.getFullYear()}
              </p>
              {/* Go to previous month button */}
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth() - 1
                    )
                  )
                }
              >
                <ChevronLeft
                  size={28}
                  className="text-white mx-2 cursor-pointer rounded-md bg-[#01663E] hover:bg-[#8A2623]"
                />
              </button>

              {/* Go to next month button */}
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth() + 1
                    )
                  )
                }
              >
                <ChevronRight
                  size={28}
                  className="text-white mx-2 cursor-pointer rounded-md bg-[#01663E] hover:bg-[#8A2623]"
                />
              </button>
            </div>
          </div>
          {/* End of Fixed Page Header Content */}

          {/* Centered Activity Stream */}
          <div className="flex items-center justify-center">
            <div className="overflow-y-auto">
              {currentMonthData.length === 0 ? (
                <div className="text-gray-500 text-center mt-40">
                  No activity for this month.
                </div>
              ) : (
                currentMonthData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    date={item.date}
                    time={item.time}
                    icon={item.icon}
                    user={item.user}
                    message={item.message}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityLog;
