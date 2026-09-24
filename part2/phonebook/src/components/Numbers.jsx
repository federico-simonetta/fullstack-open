const Numbers = ({personsToShow}) => {

    return (
        <div>
            <h1>Numbers</h1>
            {personsToShow.map(person => <p key={person.id}> {person.name} {person.number}</p>)}
        </div>
    )

}

export default Numbers;