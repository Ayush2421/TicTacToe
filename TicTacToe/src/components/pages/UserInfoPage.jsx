import HomePage from "./HomePage";
import { useContext } from "react";
import { FormPageVisbility, Player1WinCounter, Player2WinCounter, UserInformation } from "../store/Context";

export default function UserInfoPage() {
    const {isFormPage, setIsFormPage} = useContext(FormPageVisbility);
    const {userData, setUserData}= useContext(UserInformation);

    const {setPlayer1WinCount}= useContext(Player1WinCounter);
    const {setPlayer2WinCount}= useContext(Player2WinCounter);

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        setIsFormPage(!isFormPage);
        setPlayer1WinCount(0)
        setPlayer2WinCount(0)
    }
    const handleBackClick = ()=>{
        setIsFormPage(!isFormPage);
    }
    const handleInputs = (evt) => {
        setUserData({...userData, [evt.target.name]: evt.target.value});
    }

    return (
        <>
            {
                 (isFormPage) ?
                    <form onSubmit={handleSubmitForm}>
                        <input name="player1" placeholder="Enter First Player Name"
                            value={userData.player1} onChange={handleInputs} />
                        <input name="player2" placeholder="Enter Second Player Name"
                            value={userData.player2} onChange={handleInputs} />
                        <button onClick={handleBackClick}> back </button>
                        <button> Sumit </button>
                    </form>
                    :
                    <HomePage/>
            }
        </>
    )
}