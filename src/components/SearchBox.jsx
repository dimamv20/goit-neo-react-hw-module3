import '../App.css';

 function SearchBox({ value, onFilter }) {
  return (
    <div className='search'>
      <p >Search by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;