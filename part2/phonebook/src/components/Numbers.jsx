const Numbers = ({ personsToShow, handleDelete }) => {

    return (
        <div>
            <h1>Numbers</h1>
                {personsToShow.map(
                    person =>
                            <div key={person.id}>
                                {person.name} {person.number}
                                <button key={'delete' + person.id} onClick={() => handleDelete(person)}>delete</button>
                            </div>
                )}
        </div>
    )
}

export default Numbers;