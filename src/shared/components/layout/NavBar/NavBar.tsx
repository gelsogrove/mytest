import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();

  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <div>
      <MenuItem onClick={() => handleClick('/')}>Home</MenuItem>
      <MenuItem onClick={() => handleClick('/cats')}>Cats</MenuItem>
      <MenuItem onClick={() => handleClick('/contactus')}>ContactUs</MenuItem>
    </div>
  );
}
