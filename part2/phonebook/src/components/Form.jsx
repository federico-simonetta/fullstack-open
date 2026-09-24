const Form = ({newName, handleNameChange, newPhoneNumber, handlePhoneNumberChange, addName}) => {
    return (
        <div>
            <h1>add a new</h1>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number: <input value={newPhoneNumber} onChange={handlePhoneNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default Form;