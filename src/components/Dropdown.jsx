
//?type_eq=
const Dropdown = ({ options }) => {
  const  handleDropdownChange = async e => {
    console.log('handleDropdownChange')
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" onChange={handleDropdownChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
