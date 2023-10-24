import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "./Button";
import { useModal } from "../contexts/ModalContext";
import { useState } from "react";
import Analytics from "./Analytics";
import { fetchUserEvents } from "../utility/DashboardFetch";
import { useQuery } from '@tanstack/react-query';
import ZKZg from "../assets/ZKZg.gif";
import EventDelModal from "./modals/EventDelModal";
import { Element } from "react-scroll";

const Aside = () => {
  const { openDel, delEvent } = useModal();
  const [gigId, setGigId] = useState(null);
  const {
    data: gigs,
    error,
    isLoading,
  } = useQuery({ queryKey: ["userEvents"], queryFn: fetchUserEvents });
  
 

  const buttonClick = (gigId) => {
    openDel(gigId);
    setGigId(gigId);
  }

 
  return (
    <div className="bg-[#F4F4F4] rounded-xl ">
      <div className="p-[30px]">
        <h3 className="pb-[24px] text-[26px] font-semibold text-[#1E1E1E]">
          Today
        </h3>
        <Calendar />
      </div>
      <Element name="event">
      <h3 className="pl-[20px] text-[26px] font-semibold text-[#1E1E1E]">
        My Events
      </h3>
      </Element>
      <div className="bg-white mx-[17px] mt-[30px]rounded-lg">
        {
          isLoading? (
            <div>
            <img src={ZKZg} className=" mx-auto" alt="icon" />
          </div>
        )
          :
          (
            gigs?.map((gig, index) => (
              <div className="p-2 flex justify-between items-center" key={index}>
                <h3 className=" font-medium text-lg">{gig.name}</h3>
                <Button onClick={() => buttonClick(gig.id)} px={"px-[16px]"} py={"py-[8px]"}>
                  Cancel Event
                </Button>
              </div>
            ))
          )
        }
      </div>
      <div>{error? error.message : ""}</div>
      <Element name="analytics">
      <Analytics />
      </Element>
      {delEvent && <EventDelModal gigId={gigId} />}
    </div>
  );
};

export default Aside;
