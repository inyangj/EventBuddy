import { useModal } from "../contexts/ModalContext";
import EventSuccess from "./modals/EventSuccess";
import { Element } from "react-scroll";
import RegSuccess from "./modals/RegSuccess";
import EventDelete from "./modals/EventDeleteSuccess";
import CancelSuccess from "./modals/CancelSuccess";
import UpcomingEvent from "./UpcomingEvents";
import RegisteredEvents from "./RegisteredEvents";

const EventBody = () => {
  const {
    eventSuccessModal,
    regSuccess,
    delEventSuccess,
    cancelRegSucess,
  } = useModal();

  return (
    <div className=" mx-[40px]">
      <div className="flex gap-14 bg-[#F4F4F4] rounded-lg p-[20px]">
        <div>
          <h1 className=" font-semibold text-[28px] text-[#1E1E1E] pb-2">
            Welcome to EventBuddy
          </h1>
          <p className=" text-[rgba(30, 30, 30, 0.90)] text-[20px]">
            Your all-in-one Event Management and Follow-up tool Where you can
            easily register for events and receive personalized follow up
            messages.
          </p>
        </div>
        <img src="/images/time-management.png" alt="icon" />
      </div>

      <div className=" flex justify-between text-[#1E1E1E] font-semibold mt-[56px] mb-2">
      <Element name="upcoming">
        <p className="  text-[26px] ">Upcoming Events</p>
        </Element>
        <p className="text-[20px] ">See More</p>
      </div>
      <UpcomingEvent />

      <div className=" flex justify-between text-[#1E1E1E] font-semibold mt-[56px] mb-2">
      <Element name="registered">
        <p className="  text-[26px] ">Registered Events</p>
        </Element>
        <p className="text-[20px] ">See All</p>
      </div>

      <div className=" text-[#1E1E1E] mt-[56px] mb-2">
        <RegisteredEvents />
      </div>
      {eventSuccessModal && <EventSuccess />}
      {delEventSuccess && <EventDelete />}
      {regSuccess && <RegSuccess />}

      {cancelRegSucess && <CancelSuccess />}
    </div>
  );
};

export default EventBody;
