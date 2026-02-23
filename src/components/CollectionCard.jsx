import { useDispatch } from "react-redux";
import { removeCollection, removeToast } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {

    const dispatch = useDispatch();

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item))
        dispatch(removeToast())
    }

    return (
        <div
            className="
            relative 
            h-72 sm:h-80 lg:h-80
            w-full 
            sm:w-[45vw] 
            md:w-[30vw] 
            lg:w-[18vw]   /* 👈 laptop same as before */
            rounded-xl overflow-hidden mt-1"
        >
            <a target="_blank" rel="noreferrer" href={item.url}>

                {item.type === "photo" && (
                    <img
                        loading="lazy"
                        className="object-cover object-center h-full w-full"
                        src={item.src}
                        alt={item.title}
                    />
                )}

                {item.type === "video" && (
                    <video
                        className="object-cover object-center h-full w-full"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        src={item.src}
                    />
                )}

            </a>

            <div className="flex items-center justify-between absolute bottom-0 px-2 w-full py-2">
                <h2 className="text-[15px] sm:text-[16px] lg:text-[17px] tracking-tight h-11 overflow-hidden leading-tight font-light capitalize">
                    {item.title}
                </h2>

                <button
                    onClick={() => removeFromCollection(item)}
                    className="px-3 py-1 bg-red-500 ml-2 cursor-pointer active:scale-95 rounded transition-transform duration-150"
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CollectionCard;