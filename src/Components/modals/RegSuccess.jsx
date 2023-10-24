import { useModal } from "../../contexts/ModalContext";

const RegSuccess = () => {
  const { closeRegSuccess } = useModal();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-bg fixed inset-0 z-40"></div>
      <div className="modal-content z-50 bg-white p-4 rounded-lg shadow-lg w-2/6 text-[#1E1E1E] text-[18px] text-center">
        <p
          onClick={closeRegSuccess}
          className="hover:text-red-700 text-end cursor-pointer pb-3 font-medium"
        >
          X
        </p>

        <h2>Registration Successful</h2>
        <img src="/images/checkmark.png" className="mx-auto my-3" alt="icon" />
        <p>HURRAY!! Your spot has been reserved</p>
      </div>
    </div>
  );
};

export default RegSuccess;
