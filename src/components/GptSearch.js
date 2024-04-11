import { BACKGROUND_URL } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

export default function GptSearch() {
    return (
        <>
            <div className="fixed -z-10">
                <img className="w-full h-full object-cover" src={BACKGROUND_URL} alt="logo" />
            </div>
            <div className="">
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    )
}