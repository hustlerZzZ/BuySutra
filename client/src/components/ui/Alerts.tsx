import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setAlert } from "../../redux/slice/alertControls";

export default function Alerts() {
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-600 py-2 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <p className="font-bold">Rs 250 off for New Users, Use Code NEW2025</p>

        <button onClick={() => dispatch(setAlert())}>
          <IoMdClose className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
