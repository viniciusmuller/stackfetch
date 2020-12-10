import { FaSearch } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

interface SearchBarProps {
  // The onClick callback is used for fetching users from the API.
  onClick: (event: React.MouseEvent | null) => void;
  onChange: (event: React.ChangeEvent) => void;
}

function SearchBar(props: SearchBarProps) {
  function handleKeyDown(event: React.KeyboardEvent) {
    // Listen the input and fetch users on a 'Enter' key press.
    if (event.key === "Enter") props.onClick(null);
  }

  return (
    <div id="search">
      <TextField
        type="text"
        spellCheck={false}
        className="search-users-input"
        placeholder="Search for some cool people..."
        onChange={props.onChange}
        onKeyPress={handleKeyDown}
      />
      <Button className="search-button" onClick={props.onClick}>
        <FaSearch size="1.4rem" />
      </Button>
    </div>
  );
}

export default SearchBar;
