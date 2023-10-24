import { useModal } from "../../contexts/ModalContext";
import Button from "../Button";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { cancelEvent } from "../../utility/DashboardFetch";

const EventDelModal = (gigId) => {
  const { closeDel, openDelSuccess } = useModal();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: "cancelEvent",
    mutationFn: cancelEvent,
    onSuccess: () => {
      queryClient.invalidateQueries("events", "userEvents");
      closeDel();
      openDelSuccess();
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cancel = {
      isCancelled: true,
    };
    const id = gigId.gigId;

    mutate({ cancel, id });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-bg fixed inset-0 z-40"></div>
      <div className="modal-content z-50 bg-white p-4 rounded-lg shadow-lg w-2/6 text-[#1E1E1E] text-[18px]">
        <div className="text-2xl font-semibold mb-4 flex justify-between">
          <p>Are you sure you want to cancel?</p>
          <button
            className=" hover:text-red-700 text-[#667080] mb-6"
            onClick={closeDel}
          >
            x
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex justify-between items-center gap-5"
        >
          <button
            type="submit"
            className=" rounded-lg border-2 border-[#1E1E1E] px-[16px] py-[8px]"
          >
            {isPending ? "Cancelling..." : " Yes, Cancel"}
          </button>

          <Button onClick={closeDel} px={"px-[16px]"} py={"py-[8px]"}>
            No, Don't Cancel
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EventDelModal;
