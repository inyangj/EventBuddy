import Aside from "../Components/Aside"
import EventBody from "../Components/EventBody"
import Nav from "../Components/Nav"
import SearchBar from "../Components/SearchBar"




const Dashboard = () => {


    return(
        <div className="flex relative">
           <Nav />
           <div className=" absolute left-[212px] w-[86%]">
            <SearchBar />
            <div className="flex mr-[40px] mb-[63px]">
                <EventBody />
                <Aside />
                
            </div>
           </div>
        </div>
    )
}

export default Dashboard