import { useState, useEffect } from "react";
import Input from "../Input";
import Button from "../Button";
import { useModal } from "../../contexts/ModalContext";
import { createEvent } from "../../utility/DashboardFetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";


const CreateEvent = () => {
  const {closeCreateEventModal, openEventSuccessModal} = useModal();
  const  [id, setId]  = useState("");
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
  
      
    if (userData) {
      setId(userData.data.id)
    } 

    
  }, []);
  
  
  const {mutate, isPending} = useMutation({
    mutationKey: "createEvent",
   mutationFn: createEvent,
   onSuccess: () => {
    queryClient.invalidateQueries("events"); 
    closeCreateEventModal();
    openEventSuccessModal();
  },
      
    
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventDateTime = `${date}T${time}:00Z`;
    
    const eventData = {
      name: title,
      createdBy: id,
      about : details,
      location,
      date: eventDateTime,
    };

     mutate(eventData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-bg fixed inset-0 z-40"></div>
      <div className="modal-content z-50 bg-white p-4 rounded-lg shadow-lg w-2/5 text-[#1E1E1E] text-[18px]">
        <div className="flex items-center justify-between pb-4">
          <h2 className=" text-[26px] font-semibold">Create Your Event</h2>
          <button
            onClick={closeCreateEventModal}
            className="hover:text-red-700"
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Title">Title/Name of the Event</label>
            <Input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="Date">Enter Date of the Event</label>
            <Input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="Time">Enter Time of the Event</label>
            <Input
              type="time"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="Location">Location</label>
            <Input
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>

          <div className="grid">
            <label htmlFor="details">
              Add all Necessary Details about the Event
            </label>
            <textarea
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              cols="10"
              className="border border-[#7E7E7E] rounded   outline-none"
              rows="5"
            ></textarea>
          </div>
          <div className="flex gap-2 pt-1">
            <Input type="checkbox" />
            <label htmlFor="follow">Add Customized Follow-up Messages</label>
          </div>
          <div className="flex gap-2">
            <Input type="checkbox" />
            <label htmlFor="claender">Add Event to Calender</label>
          </div>
          <Button
            type="submit"
            disabled={isPending}
            px={`px-[16px]`}
            py={`py-[8px]`}
          >
            {isPending ? "Creating..." : "Create Event"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
