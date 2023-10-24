
const Analytics = () => {


    return(
        <div className="p-[20px] grid gap-4 mt-[450px]">
        <h3 className=" text-[26px] font-semibold text-[#1E1E1E]">Analytics Overview</h3>
        <div className="flex gap-6 bg-white p-2 rounded-lg items-center">
            <img src="/images/eventicon.png" alt="" />
            <p className=" text-xl">12 Events Created</p>
        </div>
        <div className="flex gap-6 bg-white p-2 rounded-lg items-center">
            <img src="/images/successicon.png" alt="" />
            <p className=" text-xl">10 Events Successful</p>
        </div>
        <div className="flex gap-6 bg-white p-2 rounded-lg items-center">
            <img src="/images/cancelledicon.png" alt="" />
            <p className=" text-xl">12 Cancelled Events</p>
        </div>
        <div className="flex gap-6 bg-white p-2 rounded-lg items-center">
            <img src="/images/upcomingicon.png" alt="" />
            <p className=" text-xl">12 Upcoming Events</p>
        </div>
      </div>
    )
}
export default Analytics;