import IconButton from "@material-ui/core/IconButton";
import { FaPlusSquare } from "react-icons/fa";

function LoadUsersButton({ ...props }) {
  return (
    <>
      <div className="load-users-break"></div>
      <IconButton className="load-users-button" onClick={props.onClick}>
        <FaPlusSquare size="2.6rem" />
      </IconButton>
    </>
  );
}

export default LoadUsersButton;
