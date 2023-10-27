import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useModal } from "../../contexts/ModalContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { registerEvent } from "../../utility/DashboardFetch";

const Register = (eventId) => {
  const { closeRegisterModal, openRegSuccess } = useModal();
  const  [id, setId]  = useState("");
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { mutate: register, isPending } = useMutation({
    mutationKey: "registerEvent",
    mutationFn: registerEvent,
    onSuccess: () => {
      queryClient.invalidateQueries("registrations");
      openRegSuccess();
      closeRegisterModal();
    },
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
  
      
    if (userData) {
      setId(userData.data.id)
    } 

    
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationData = {
      event: eventId.eventId,
      name,
      email,
      phoneNumber,
      isUser: true,
      user: id,
    };

    register(registrationData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-bg fixed inset-0 z-40"></div>
      <div className="modal-content z-50 bg-white p-4 rounded-lg shadow-lg w-2/6 text-[#1E1E1E] text-[18px]">
        <div className="flex items-center justify-between pb-4">
          <h2 className=" text-[26px] font-semibold">Register Here</h2>
          <button
            onClick={closeRegisterModal}
            className=" font-medium hover:text-red-700"
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Name">Name</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <Input
              type="tel"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-2 pt-1">
            <Input type="checkbox" />
            <label htmlFor="follow">
              Subscribe to automated follow-up messages
            </label>
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
            {isPending ? "Registering..." : " Register"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
