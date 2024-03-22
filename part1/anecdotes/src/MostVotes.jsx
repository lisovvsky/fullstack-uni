const MostVotes = (props) => {
    return (
        <>
            <h1>Anecdote with most votes</h1>
            {props.anecdotes}
            <br/>has {props.points} votes
        </>
    )
};
export default MostVotes;