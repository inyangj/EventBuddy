
 import CreateEvent from "./modals/CreateEvent";
import { useModal } from "../contexts/ModalContext";

const SearchBar = () => {
    const {
        createEventModal,
        openCreateEventModal,
      } = useModal();

 

    return(
        <div className='flex items-center justify-between p-[34px]'>
            <div className='flex items-center gap-2 border border-[#1E1E1E] rounded-xl p-2 w-[467px]'>
            <img src="/images/search.png" alt="icon" />
            <input type="text"
            placeholder='Search for an event'
            className=' outline-none pl-1' />
            </div>
            <div className='flex gap-10 items-center'>
            <img src="/images/bell.png" alt="icon" />
            <div onClick={openCreateEventModal} className='flex gap-2 bg-[#1E1E1E] text-white rounded-xl p-4 items-center'>
                <img src="/images/add.png" alt="icon" />
                <button >Create New Event</button>
            </div>
            </div>
            {createEventModal && <CreateEvent />}
        </div>
    )
}

export default SearchBar;