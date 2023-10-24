import { useModal } from "../contexts/ModalContext";
import Register from "./modals/Register";
import Button from "./Button";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../utility/DashboardFetch";
import ZKZg from "../assets/ZKZg.gif";
import { useState } from "react";

const UpcomingEvent = () => {
  const [eventId, setEventId] = useState(null);
  const { registerModal, openRegisterModal } = useModal();
  const {
    data: events,
    isLoading,
    error,
  } = useQuery({ queryKey: ["events"], queryFn: fetchEvents });

  if (isLoading) {
    return (
      <div>
        <img src={ZKZg} className=" mx-auto" alt="icon" />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const buttonClick = (eventId) => {
    setEventId(eventId);
    openRegisterModal(eventId);
  };

  return (
    <div>
      {events?.map((event, index) => (
        <div
          className="bg-[#F4F4F4] rounded-lg  p-[20px] text-[#1E1E1E] grid gap-6 text-[18px] mb-4"
          key={index}
        >
          <h3 className="text-[22px] font-semibold">{event.name}</h3>
          <p>
            <span className="text-[20px] font-semibold">About the Event:</span>{" "}
            {event.about}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p>
                <span className="text-[20px] font-semibold">Date:</span>{" "}
                {event.date}
              </p>
              <p>
                <span className="text-[20px] font-semibold">Location:</span>{" "}
                {event.location}
              </p>
            </div>
            <Button
              px={"px-4"}
              py={" py-[12px]"}
              onClick={() => buttonClick(event.id)}
            >
              Save me a spot!
            </Button>
          </div>
        </div>
      ))}
      {registerModal && <Register eventId={eventId} />}
    </div>
  );
};

export default UpcomingEvent;
