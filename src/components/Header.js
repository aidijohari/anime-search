import { TextField } from "@mui/material";

function Header(props) {
  return (
    <nav>
      <div className="search-container">
        <form className="search-box" onSubmit={props.handleSearch}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
}

export default Header;
