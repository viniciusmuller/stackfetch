import IconButton from '@material-ui/core/IconButton';
import { FaPlusSquare } from 'react-icons/fa';

function LoadUsersButton({ ...props }) {
  const { onClick } = props;

  return (
    <>
      <div className="load-users-break" />
      <IconButton className="load-users-button" onClick={onClick}>
        <FaPlusSquare size="2.6rem" />
      </IconButton>
    </>
  );
}

export default LoadUsersButton;
