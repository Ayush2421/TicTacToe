import LoadingPage from "./pages/LoadingPage";
import { useState } from "react";
import { Player1WinCounter, Player2WinCounter } from "./store/Context";
import "./pages/CSS/pages.css"
import "./mainGameComponents/CSS/mainGameComponents.css"

export default function StartGame() {
    const [player1WinCount, setPlayer1WinCount] = useState(0);
    const [player2WinCount, setPlayer2WinCount] = useState(0);
    return (
        <>
            <Player1WinCounter.Provider value={{player1WinCount,setPlayer1WinCount}}>
                <Player2WinCounter.Provider value={{player2WinCount,setPlayer2WinCount}}>
                    <LoadingPage />
                </Player2WinCounter.Provider>
            </Player1WinCounter.Provider>
        </>
    )
}