const EventBody = () => {
  return (
    <div className=" mx-[40px]">
      <div className="flex gap-14 bg-[#F4F4F4] rounded-lg w-[788px] p-[20px]">
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

      <div className="w-[788px] flex justify-between text-[#1E1E1E] font-semibold mt-[56px] mb-2">
        <p className="  text-[26px] ">Upcoming Events</p>
        <p className="text-[20px] ">See More</p>
      </div>

      <div className="bg-[#F4F4F4] rounded-lg w-[788px] p-[20px] text-[#1E1E1E] grid gap-6 text-[18px] mb-4">
        <p className="text-[22px] font-semibold">Product Launch</p>
        <p>
          <span className="text-[20px] font-semibold">About the Event:</span>{" "}
          Stakeholders and staff of Ril gather here as we lauch our new and
          indomitable product “HEADLESS HR”. We would be elated to have you
          here.
        </p>
        <div className="flex justify-between items-center">
          <div>
            <p>
              <span className="text-[20px] font-semibold">Date:</span> 8:30pm on
              the 18th, May 2022
            </p>
            <p>
              <span className="text-[20px] font-semibold">Location:</span> Aztec
              Arcum, Trans Amadi Rivers State.
            </p>
          </div>
          <button className=" bg-[#1E1E1E] text-white py-[12px] px-4 rounded-lg">
            Save me a spot!
          </button>
        </div>
      </div>

      <div className="bg-[#F4F4F4] rounded-lg w-[788px] p-[20px] text-[#1E1E1E] grid gap-6 text-[18px] mb-2">
        <p className="text-[22px] font-semibold">Product Launch</p>
        <p>
          <span className="text-[20px] font-semibold">About the Event:</span>{" "}
          Stakeholders and staff of Ril gather here as we lauch our new and
          indomitable product “HEADLESS HR”. We would be elated to have you
          here.
        </p>
        <div className="flex justify-between items-center">
          <div>
            <p>
              <span className="text-[20px] font-semibold">Date:</span> 8:30pm on
              the 18th, May 2022
            </p>
            <p>
              <span className="text-[20px] font-semibold">Location:</span> Aztec
              Arcum, Trans Amadi Rivers State.
            </p>
          </div>
          <button className=" bg-[#1E1E1E] text-white py-[12px] px-4 rounded-lg">
            Save me a spot!
          </button>
        </div>
      </div>

      <div className="w-[788px] flex justify-between text-[#1E1E1E] font-semibold mt-[56px] mb-2">
        <p className="  text-[26px] ">Registered Events</p>
        <p className="text-[20px] ">See All</p>
      </div>

      <div className="w-[788px] flex gap-[32px] text-[#1E1E1E] mt-[56px] mb-2">
        <div className="bg-[#F4F4F4] rounded-lg  p-[20px] text-[#1E1E1E] grid gap-6 text-[18px] mb-2">
          <p className="text-[22px] font-semibold">
            Networking Event for Entrepreneurs
          </p>
          <p>
            A once in a lifetime opportunity to meet top tech talents and
            network your way to the top!
          </p>
          <div>
         
              <p>
                <span className="text-[20px] font-semibold">Date:</span> 8:30pm
                on the 18th, May 2022
              </p>
              
            <button className=" bg-[#1E1E1E] text-white py-[12px] px-4 rounded-lg mt-3">
              Cancel Registration
            </button>
          </div>
        </div>
        <div className="bg-[#F4F4F4] rounded-lg  p-[20px] text-[#1E1E1E] grid gap-6 text-[18px] mb-2">
          <p className="text-[22px] font-semibold">
            Networking Event for Entrepreneurs
          </p>
          <p>
            A once in a lifetime opportunity to meet top tech talents and
            network your way to the top!
          </p>
          <div>
         
              <p>
                <span className="text-[20px] font-semibold">Date:</span> 8:30pm
                on the 18th, May 2022
              </p>
              
            <button className=" bg-[#1E1E1E] text-white py-[12px] px-4 rounded-lg mt-3">
              Cancel Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBody;
