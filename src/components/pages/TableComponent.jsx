
// import React, { useState } from 'react';
// import { Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TableSortLabel, TablePagination } from '@mui/material';
// import ViewData from './ViewData'; 
// import UpdateData from './UpdateData'; 

// function TableComponent({ students, searchQuery, handleSearchChange, handleDeleteStudent, handleUpdateStudent }) {
//   const [openView, setOpenView] = useState(false); 
//   const [openUpdate, setOpenUpdate] = useState(false); 
//   const [selectedStudent, setSelectedStudent] = useState(null); 
//   const [order, setOrder] = useState('asc'); 
//   const [orderBy, setOrderBy] = useState('id'); 
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);


//   const handleViewOpen = (student) => {
//     setSelectedStudent(student);
//     setOpenView(true);
//   };

//   const handleViewClose = () => {
//     setOpenView(false);
//   };

//   const handleUpdateOpen = (student) => {
//     setSelectedStudent(student);
//     setOpenUpdate(true);
//   };

//   const handleUpdateClose = () => {
//     setOpenUpdate(false);
//   };

//   const handleSort = (property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const sortedStudents = [...students].sort((a, b) => {
//     if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
//     if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
//     return 0;
//   });

//   const filteredStudents = sortedStudents.filter((student) =>
//     student.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     student.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     student.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const displayedStudents = filteredStudents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   return (
//     <Box>
//       <Box display="flex" justifyContent="space-between" mb={2}>
//         <TextField
//           label="Search"
//           variant="outlined"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           sx={{ width: '100%', maxWidth: '300px' }}
//         />
//       </Box>

//       <TableContainer component={Paper} sx={{overflow:"auto", height: "500px"}}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>
//                 <TableSortLabel
//                   active={orderBy === 'id'}
//                   direction={orderBy === 'id' ? order : 'asc'}
//                   onClick={() => handleSort('id')}
//                 >
//                   <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>ID</Box>
//                 </TableSortLabel>
//               </TableCell>
//               <TableCell>
//                 <TableSortLabel
//                   active={orderBy === 'first_name'}
//                   direction={orderBy === 'first_name' ? order : 'asc'}
//                   onClick={() => handleSort('first_name')}
//                 >
//                   <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>First Name</Box>
//                 </TableSortLabel>
//               </TableCell>
//               <TableCell>
//                 <TableSortLabel
//                   active={orderBy === 'last_name'}
//                   direction={orderBy === 'last_name' ? order : 'asc'}
//                   onClick={() => handleSort('last_name')}
//                 >
//                   <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Last Name</Box>
//                 </TableSortLabel>
//               </TableCell>
//               <TableCell>
//                 <TableSortLabel
//                   active={orderBy === 'contact_no'}
//                   direction={orderBy === 'contact_no' ? order : 'asc'}
//                   onClick={() => handleSort('contact_no')}
//                 >
//                   <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Contact No</Box>
//                 </TableSortLabel>
//               </TableCell>
//               <TableCell>
//                 <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Action</Box>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredStudents.map((student) => (
//               <TableRow key={student.id}>
//                 <TableCell sx={{ fontSize: '1rem' }}>{student.id}</TableCell>
//                 <TableCell sx={{ fontSize: '1rem' }}>{student.first_name}</TableCell>
//                 <TableCell sx={{ fontSize: '1rem' }}>{student.last_name}</TableCell>
//                 <TableCell sx={{ fontSize: '1rem' }}>{student.contact_no}</TableCell>
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     color="success"
//                     size="small"
//                     style={{ marginRight: 8 }}
//                     onClick={() => handleViewOpen(student)}
//                   >
//                     View
//                   </Button>
//                   <Button
//                     variant="contained"
//                     color="info"
//                     size="small"
//                     style={{ marginRight: 8 }}
//                     onClick={() => handleUpdateOpen(student)}
//                   >
//                     Update
//                   </Button>
//                   <Button
//                     variant="contained"
//                     color="error"
//                     size="small"
//                     onClick={() => handleDeleteStudent(student)}
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <TablePagination
//         component="div"
//         count={filteredStudents.length}
//         page={page}
//         onPageChange={handleChangePage}
//         rowsPerPage={rowsPerPage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />

//       {/* View modal */}
//       <ViewData
//         open={openView}
//         handleClose={handleViewClose}
//         student={selectedStudent}
//       />

//       {/* Update modal */}
//       <UpdateData
//         open={openUpdate}
//         handleClose={handleUpdateClose}
//         student={selectedStudent}
//         handleUpdateStudent={handleUpdateStudent}
//       />
//     </Box>
//   );
// }

// export default TableComponent;





import React, { useState } from 'react';
import {
  Box,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TableSortLabel,
  TablePagination
} from '@mui/material';
import ViewData from './ViewData';
import UpdateData from './UpdateData';

function TableComponent({ students, searchQuery, handleSearchChange, handleDeleteStudent, handleUpdateStudent }) {
  const [openView, setOpenView] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleViewOpen = (student) => {
    setSelectedStudent(student);
    setOpenView(true);
  };

  const handleViewClose = () => {
    setOpenView(false);
  };

  const handleUpdateOpen = (student) => {
    setSelectedStudent(student);
    setOpenUpdate(true);
  };

  const handleUpdateClose = () => {
    setOpenUpdate(false);
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedStudents = [...students].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
    return 0;
  });

  const filteredStudents = sortedStudents.filter((student) =>
    student.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedStudents = filteredStudents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ width: '100%', maxWidth: '300px' }}
        />
      </Box>

      <TableContainer component={Paper} sx={{ overflow: 'auto', height: '500px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'id'}
                  direction={orderBy === 'id' ? order : 'asc'}
                  onClick={() => handleSort('id')}
                >
                  <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>ID</Box>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'first_name'}
                  direction={orderBy === 'first_name' ? order : 'asc'}
                  onClick={() => handleSort('first_name')}
                >
                  <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>First Name</Box>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'last_name'}
                  direction={orderBy === 'last_name' ? order : 'asc'}
                  onClick={() => handleSort('last_name')}
                >
                  <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Last Name</Box>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'contact_no'}
                  direction={orderBy === 'contact_no' ? order : 'asc'}
                  onClick={() => handleSort('contact_no')}
                >
                  <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Contact No</Box>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Action</Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell sx={{ fontSize: '1rem' }}>{student.id}</TableCell>
                <TableCell sx={{ fontSize: '1rem' }}>{student.first_name}</TableCell>
                <TableCell sx={{ fontSize: '1rem' }}>{student.last_name}</TableCell>
                <TableCell sx={{ fontSize: '1rem' }}>{student.contact_no}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    style={{ marginRight: 8 }}
                    onClick={() => handleViewOpen(student)}
                  >
                    View
                  </Button>
                  <Button
                    variant="contained"
                    color="info"
                    size="small"
                    style={{ marginRight: 8 }}
                    onClick={() => handleUpdateOpen(student)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDeleteStudent(student)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={filteredStudents.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* View modal */}
      <ViewData
        open={openView}
        handleClose={handleViewClose}
        student={selectedStudent}
      />

      {/* Update modal */}
      <UpdateData
        open={openUpdate}
        handleClose={handleUpdateClose}
        student={selectedStudent}
        handleUpdateStudent={handleUpdateStudent}
      />
    </Box>
  );
}

export default TableComponent;
