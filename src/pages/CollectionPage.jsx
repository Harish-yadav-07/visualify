import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {

    const collection = useSelector(state => state.collection.items)
    const dispatch = useDispatch();
    const clearAll = () => {
        dispatch(clearCollection())
    }

    return (
        <div className='overflow-auto'>
            {collection.length > 0 ? <div className="flex justify-between px-20 py-6">
                <h2 className="text-3xl text-green-400 font-medium">Your Collection</h2>
                <button
                    onClick={() => {
                        clearAll()
                    }}
                    className="px-3 py-1 bg-red-500 ml-2 cursor-pointer active:scale-95 rounded transition-transform duration-150">Clear Collection</button>
            </div> : <h2 className="text-5xl py-10 text-gray-400 text-center font-medium">Collection is Empty!</h2>}

            <div className="flex justify-start w-full flex-wrap gap-5 px-7 pb-6">
                {collection.map((item, idx) => {
                    return <div key={idx}>
                        <CollectionCard item={item} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default CollectionPage;