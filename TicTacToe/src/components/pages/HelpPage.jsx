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
                    <p>Lorem ipsum dga exercitationem amet! Nihil, ipsam!</p>
                    <button id="button" onClick={handleBackBtn}> back </button>
                </div>
                :
                <HomePage />
            }
        </>
    )
}