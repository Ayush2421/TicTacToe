import React, { useState } from 'react'
import "./TTTGame.css"

export default function TTTGame(props) {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTrue, setXTrue] = useState(true);
    const [winner, setWinner] = useState(null);
    const [checkBtnState, setCheckBtnState] = useState(false);

    const renderSquare = (index) => {
        return (
            <button className='board-btn' disabled = {checkBtnState} onClick={() => handleBtnClick(index)}> {board[index]} </button>
        )
    }
    const handleBtnClick = (index) => {
        if (board[index] === null) {
            const newBoard = [...board];
            newBoard[index] = isXTrue ? "X" : "O";
            setBoard(newBoard);
            setXTrue(!isXTrue);
            const winner =  checkWinner(newBoard)
            if(winner){
                setWinner(winner);
                setCheckBtnState(true);
            }
        }
    }

    const checkWinner = (newBoard)=> {
        const combination =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0; i< combination.length; i++){
            const [a,b,c] = combination[i]
            if(newBoard[a] !==null && newBoard[b] !=null && newBoard[c] !==null){
                if(newBoard[a] ===newBoard[b] && newBoard[b]===newBoard[c]){
                    return newBoard[a]
                }
            }
        }
        return null;
    }

    const handleReset = ()=> {
        setBoard(Array(9).fill(null))
        setWinner(null);
        setCheckBtnState(false);
    }

    return (
        <div className='board'>
            <h1>{props.gameName}</h1>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <hr/>
            <div>
                <button className="reserBtn" onClick={()=> handleReset()}>Reset</button>
            </div>
            <hr/>
            <div style={{color: "brown"}}>Winner is: {winner}</div>
        </div>
    );
}