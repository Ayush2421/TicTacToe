import { useContext, useState } from "react";
import { GameWinner } from "../store/Context";

export default function GamePart({ board, setBoard, checkBtnState, setCheckBtnState }) {

    const [visibleX, setVisiblX] = useState(true);
    const { setWinner, setPlayerMsg } = useContext(GameWinner)

    const handleSmallBoxes = (index) => {
        if (board[index] === null) {
            const newBoard = [...board];
            newBoard[index] = visibleX ? "X" : "O";
            setBoard(newBoard);
            setVisiblX(!visibleX);
            const win = checkWinner(newBoard)
            if (win) {
                setPlayerMsg(null)
                setWinner(win);
                setCheckBtnState(true);
            }
            else if (!newBoard.includes(null)) {
                setPlayerMsg("Tie");
            } else {
                setPlayerMsg(newBoard[index])
            }
        }
    }

    const checkWinner = (newBoard) => {
        const combination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < combination.length; i++) {
            const [a, b, c] = combination[i]
            if (newBoard[a] !== null && newBoard[b] != null && newBoard[c] !== null) {
                if (newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
                    return newBoard[a]
                }
            }
        }
        return null;
    }

    return (
        <>
            <div className="gamePartContainer">
                {board.map((_, index) => {
                    return (
                        <button key={index} disabled={checkBtnState} onClick={() => handleSmallBoxes(index)}>
                            <h1>{board[index]}</h1>
                        </button>)
                })
                }
            </div>

        </>
    )
}