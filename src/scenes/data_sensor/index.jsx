import {
  Box,
  useTheme,
  IconButton,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { useState } from 'react';
import { mockDataSensors } from '../../data/mockData';
import Header from '../../components/Header';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const DataSensors = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedOption, setSelectedOption] = useState('');
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'temperature',
      headerName: 'Temperature',
      type: 'number',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'humidity',
      headerName: 'Humidity',
      flex: 1,
      type: 'number',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'light',
      headerName: 'Light',
      flex: 1,
      type: 'number',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'time',
      headerName: 'Time',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    alert(event.target.value);
  };

  return (
    <Box m="20px">
      <Header title="DATA SENSORS" subtitle="Managing the data sensors" />
      <Box display="flex">
        {/* SEARCH BAR */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]} // Đặt màu nền cho thanh tìm kiếm
          borderRadius="50px" // Bo tròn các góc
        >
          {/* Thanh tìm kiếm */}
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
        <Typography
          sx={{
            ml: 2,
            fontSize: '1rem',
            color: 'text.primary',
            mt: '12px',
            fontWeight: 'bold',
          }}
        >
          Select Field:
        </Typography>

        {/* Select dropdown */}
        <Select
          defaultValue="option1" // Set default value
          sx={{
            ml: 2,
            minWidth: 120,
            backgroundColor: colors.primary[400],
            borderRadius: '50px', // Rounded corners for select
          }}
          value={selectedOption} // Bind the select to the state
          onChange={handleChange} // Update state on change
          variant="outlined" // Outlined variant for better visibility
        >
          <MenuItem value="Temperature">Temperature</MenuItem>
          <MenuItem value="Humidity">Humidity</MenuItem>
          <MenuItem value="Light">Light</MenuItem>
        </Select>
      </Box>
      <Box
        m="40px 0 0 0"
        height="77vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
            fontSize: '0.9rem',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
            fontSize: '0.9rem',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
            fontSize: '0.9rem',
            fontWeight: 'bold',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataSensors} columns={columns} />
      </Box>
    </Box>
  );
};

export default DataSensors;
