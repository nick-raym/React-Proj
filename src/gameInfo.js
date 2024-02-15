export default function Info({ wager, roundScore, multArray, handleChangeMult, multi }) {
    console.log(multi)
    return (
        <div className="game-info">
            <div className="form">
                <form onSubmit={handleChangeMult} >
                    <select name="mults">
                        {multArray.map((mult) => { return <option key={mult} value={mult}>{mult}</option> })}
                    </select>
                    <button type="submit">Change Mult</button>
                </form>
            </div>
            <div className="stats">
                <h5 >Wager: {wager} Mult: {multi}X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Points Won: {roundScore}</h5>
            </div>
        </div>
    )
}