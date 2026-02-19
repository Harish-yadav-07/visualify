import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        if (text.trim() === '') {
            alert("please enter a valid input!!")
            setText('')
            return;
        }

        dispatch(setQuery(text));
        setText('');
    }

    return (
        <div>
            <form
                onSubmit={(e) => {
                    submitHandler(e)
                }}
                className="flex gap-5 px-20 pt-5 pb-3"
            >

                <input
                    required
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    className="px-5 text-xl rounded bg-gray-800 w-screen outline-none"
                    type="text"
                    placeholder="Search anything..."
                />
                <button
                    type="submit"
                    className="bg-green-600 px-3 py-2 text-xl rounded cursor-pointer active:scale-95"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar;