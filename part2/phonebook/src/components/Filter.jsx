


const Filter = ({filVal, onChange}) => {

    return (
        <div>
            <h1>Phonebook</h1>
            <div>
                filter shown with <input value={filVal} onChange={onChange} />
            </div>
        </div>
    )
}


export default Filter;