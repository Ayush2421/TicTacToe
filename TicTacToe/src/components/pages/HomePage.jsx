import { useState } from "react";
import GamePart from "../mainGameComponents/GamePart";
import PlayersUI from "../mainGameComponents/PlayersUI";
import { FormPageVisbility, GameWinner, HelpPageVisibility, UserInformation } from "../store/Context";
import HelpPage from "./HelpPage";
import UserInfoPage from "./UserInfoPage";




export default function HomePage() {
    const userInfo = { player1: "Player1", player2: "Player2" }
    const [isHelpPage, setIsHelpPage] = useState(false);
    const [isFormPage, setIsFormPage] = useState(false);
    const [userData, setUserData] = useState(userInfo);
    const [winner, setWinner] = useState(null);
    const [board, setBoard] = useState(new Array(9).fill(null));
    const [checkBtnState, setCheckBtnState] = useState(false);

    const handleResetBtn = () => {
        setBoard(Array(9).fill(null));
        setWinner(null);
        setCheckBtnState(false);
    }
    const handleHelpPageBtn = () => {
        setIsHelpPage(true);
        handleResetBtn()
    }
    const handleFormBtn = () => {
        setIsFormPage(!isFormPage);
        handleResetBtn()
    }
    return (
        <>
            <GameWinner.Provider value={{ setWinner }}>
                <UserInformation.Provider value={{ userData, setUserData }}>
                    <FormPageVisbility.Provider value={{ isFormPage, setIsFormPage }}>
                        <HelpPageVisibility.Provider value={{ isHelpPage, setIsHelpPage }}>
                            {(isFormPage) ? <UserInfoPage /> : (isHelpPage) ? <HelpPage /> :
                                <div className="homePageContainer">
                                    <div className="homePageHeading">
                                        <h1>Tic-Tac-Toe</h1>
                                    </div>
                                    <div className="homePageContent">
                                        <div className="boardAndBtns">
                                            <GamePart board={board} setBoard={setBoard}
                                                checkBtnState={checkBtnState} setCheckBtnState={setCheckBtnState}
                                            />
                                            <div className="gamePartBtn">
                                                <button id="button" onClick={handleResetBtn}>Reset </button>
                                                <button id="button" onClick={handleHelpPageBtn}>HelpPage</button>
                                            </div>
                                        </div>
                                        <div className="WinningMsg">
                                            {winner && <h6>Winner is:
                                                {winner === "X" ? userData.player1 : userData.player2}</h6>
                                            }
                                        </div>
                                    </div>
                                    <div className="homePageFotter">
                                        <div className="playerInfoFotter">
                                            <PlayersUI winner={winner} />
                                        </div>
                                        <button id="button" onClick={handleFormBtn}>Change Name</button>
                                    </div>
                                </div>
                            }
                        </HelpPageVisibility.Provider>
                    </FormPageVisbility.Provider>
                </UserInformation.Provider>
            </GameWinner.Provider>
        </>
    )
}