/*eslint-disable*/
import { useContext, useEffect } from "react"
import { Player1WinCounter, Player2WinCounter, UserInformation } from "../store/Context"

export default function PlayersUI({ winner }) {
    const { userData } = useContext(UserInformation)
    const { player1WinCount, setPlayer1WinCount } = useContext(Player1WinCounter)
    const { player2WinCount, setPlayer2WinCount } = useContext(Player2WinCounter)

    useEffect(() => {
        if (winner === "X") {
            setPlayer1WinCount((prev) => prev + 1)
        }
        else if (winner === "O") {
            setPlayer2WinCount((prev) => prev + 1)
        }
        return;

    }, [winner])

    return (
        <div className="palyerUIContainer">
            <h3>{userData.player1}- {player1WinCount} </h3>
            <h3>{userData.player2}- {player2WinCount}</h3>
        </div>
    )
}