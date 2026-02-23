import { useSelector } from "react-redux";
import ResultGrid from "../components/ResultGrid";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";

const Home = () => {
    const { query } = useSelector((store) => store.search)

    return (
        <div className="w-full">
            <SearchBar />

            {query !== '' ? (
                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                    <Tabs />
                    <ResultGrid />
                </div>
            ) : null}
        </div>
    )
}

export default Home;