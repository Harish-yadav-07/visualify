import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {

  const tabs = ['photos', 'videos'];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-5 px-4">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`
              ${activeTab == elem
                ? 'bg-gray-800 border-2 text-green-400 border-green-400'
                : 'bg-green-600 hover:bg-green-700'}
              transition
              px-3 py-2
              text-sm sm:text-base   /* 👈 responsive text */
              rounded cursor-pointer active:scale-95 uppercase
            `}
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(elem))
            }}
          >
            {elem}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs;