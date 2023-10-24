import { useModal } from "../contexts/ModalContext";
import Button from "./Button";
import { useQuery } from '@tanstack/react-query';
import { fetchRegistrations } from "../utility/DashboardFetch";
import CancelReg from "./modals/CancelReg";
import ZKZg from "../assets/ZKZg.gif";
import { useState } from "react";


const RegisteredEvents = () => {
const { cancelReg,
    openCancelReg} = useModal();
   const [listId, setListId] = useState(null);
    const { data: regLists, isLoading, error } = useQuery({queryKey:["registrations"], 
  queryFn: fetchRegistrations});

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


  const buttonClick = (listId) => {
    setListId(listId)
    openCancelReg(listId)
  }


  return (
    <div className="grid grid-cols-3  gap-[32px]">
      {regLists?.map((list, index) => (
        <div className="bg-[#F4F4F4] rounded-lg  p-[20px] text-[#1E1E1E] grid gap-6 text-[18px] mb-2" key={index}>
          <p className="text-[22px] font-semibold">{list.event.name}</p>
          <p>{list.event.about}</p>
          <div>
            <p>
              {" "}
              <span className="text-[20px] font-semibold">Location:</span>{" "}
              {list.event.location}
            </p>
            <p>
              <span className="text-[20px] font-semibold pt-4">Date:</span>{" "}
              {list.event.date}
            </p>
            <Button py={"py-[12px]"} px={"px-4"} onClick={() => buttonClick(list.id)}>
              Cancel Registration
            </Button>
          </div>
        </div>
      ))}
         {cancelReg && <CancelReg listId={listId} />}
    </div>
  );
};

export default RegisteredEvents;
