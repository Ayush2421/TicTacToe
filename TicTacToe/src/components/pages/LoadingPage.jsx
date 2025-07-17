import { useState } from "react";
import HomePage from "./HomePage";

export default function LoadingPage() {
    const [isLoadingPage, setIsLoadingPage] = useState(true);

    const handleStart = () => {
        setIsLoadingPage(!isLoadingPage)
        console.log("workingFine");
    }

    return (
        <>
            {
                (isLoadingPage) ?
                    <div className="loadingContainer">
                        <img src="./images/tic-tac-toe.png" alt="LoadingLogo" />
                        <div className="loadingContent">
                            <h1> Welcome to Tic-Tac-Toe Game</h1>
                            <button onClick={handleStart}> Start</button>
                        </div>
                    </div>
                :
                <HomePage/>
            }
        </>
    )
}