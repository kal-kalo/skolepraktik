
//?type_eq=
const Dropdown = ({ options, onChange }) => {
  

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" onChange={onChange}>
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
