const Filter = ({ filVal, onChange }) => {

    return (
        <div>
            filter shown with <input value={filVal} onChange={onChange} />
        </div>
    )
}

export default Filter;