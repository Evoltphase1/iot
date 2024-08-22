import {
  Box,
  Typography,
  IconButton,
  useTheme,
  Select,
  MenuItem,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { tokens } from '../../theme';
import { mockDataHistoryDevice } from '../../data/mockData';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Header from '../../components/Header';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Action = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    alert(event.target.value);
  };

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row: { status } }) => {
        return (
          <>
            <Box
              width="60%"
              m="10px auto"
              p="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={
                status === '1' ? colors.greenAccent[600] : colors.redAccent[600]
              }
              borderRadius="4px"
            >
              {status === '0' && <LockOutlinedIcon />}
              {status === '1' && <LockOpenOutlinedIcon />}
              <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
                {status === '1' ? 'ON' : 'OFF'}
              </Typography>
            </Box>
          </>
        );
      },
    },
    {
      field: 'time',
      headerName: 'Time',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'action',
      headerName: 'Action',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: ({ row: { action } }) => {
        return (
          <Box
            width="60%"
            m="10px auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              action === '1' ? colors.greenAccent[600] : colors.redAccent[600]
            }
            borderRadius="4px"
          >
            {action === '0' && <LockOutlinedIcon />}
            {action === '1' && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {action === '1' ? 'ON' : 'OFF'}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="DEVICE" subtitle="Managing the data history of device" />
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
        <DataGrid rows={mockDataHistoryDevice} columns={columns} />
      </Box>
    </Box>
  );
};

export default Action;
