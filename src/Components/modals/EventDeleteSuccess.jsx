import { useModal } from "../../contexts/ModalContext";


const EventDelete = () => {
    const {closeDelSuccess} = useModal();

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-bg fixed inset-0 z-40"></div>
      <div className="modal-content z-50 bg-white p-4 rounded-lg shadow-lg w-2/6 text-[#1E1E1E] text-[18px] text-center">
      <p
          onClick={closeDelSuccess}
          className="hover:text-red-700 text-end cursor-pointer pb-4 font-medium"
        >
          X
        </p>

        <h2>Event Cancelled</h2>
        <img src="/images/red-cancel-icon.png" className="mx-auto my-3" alt="icon" />
        <p>Your Event has been Cancelled Successfully.</p>

        </div>
      </div>
    )
}

export default EventDelete;