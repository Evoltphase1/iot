import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

const Header = ({
  title,
  subtitle,
  display = '',
  justifyContent = '',
  alignContent = '',
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        display={display}
        justifyContent={justifyContent}
        alignContent={alignContent}
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: '0 0 5px 0' }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={colors.greenAccent[400]}
        display={display}
        justifyContent={justifyContent}
        alignContent={alignContent}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
