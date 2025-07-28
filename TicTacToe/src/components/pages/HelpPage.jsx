import { HelpPageVisibility } from "../store/Context";
import HomePage from "./HomePage";
import { useContext } from "react";

export default function HelpPage() {
    const { isHelpPage, setIsHelpPage } = useContext(HelpPageVisibility);

    const handleBackBtn = () => {
        setIsHelpPage(false);
    }

    return (
        <>
            {(isHelpPage) ?
                <div className="HelpPageContainer">
                    <p>Players take turns marking spaces with either "X" or "O".</p>
                    <p>The first player to get three of their symbols in a row, either horizontally, vertically, or diagonally, wins the game.</p>
                    <p>If all spaces are filled and no player has three in a row, the game is a draw.</p>
                    <button id="button" onClick={handleBackBtn}> Back </button>
                </div>
                :
                <HomePage />
            }
        </>
    )
}