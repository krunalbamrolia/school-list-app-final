import React, { useState } from 'react';
import { Box } from '@mui/material';
import TableComponent from './TableComponent';
import AddDataComponent from './AddDataComponent';
import NavBar from '../NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteData, PostData, UpdateData } from '../../ReduxToolkit/Slice/reduxSlice';
import { showErrorAlert, showSuccessAlert } from '../../sweetAlert'; 


function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isError, isLoading } = useSelector(
    (state) => state.sudentList.sudentList
  );

  let students = data?.map((value) =>({
    id: value.id,
    first_name: value.first_name,
    last_name: value.last_name,
    contact_no: value.contact_no,
    email: value.email,
    gender: value.gender,
    address: value.address,
    dob: value.dob
  }))

  const handleDeleteStudent = (student) => {
    dispatch(DeleteData({id: student.id}))
    showSuccessAlert('Success', 'Student deleted successfully'); 

  };
  
  let dispatch = useDispatch()

  const handleUpdateStudent = (updatedStudent) => {
    dispatch(UpdateData({payload : updatedStudent, id:updatedStudent.id}))
    showSuccessAlert('Success', 'Student updated successfully'); 
  };
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddStudent = (handleAddStudent) => {
    dispatch(PostData({payload : handleAddStudent }))
    showSuccessAlert('Success', 'Student added successfully'); 
   };

  return (
    <>
      <NavBar />
      <Box p={3}>
        <AddDataComponent handleAddStudent={handleAddStudent} />
        <TableComponent
          students={students}
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          handleDeleteStudent={handleDeleteStudent}
          handleUpdateStudent={handleUpdateStudent}
        />
      </Box>
    </>
  );
}

export default Dashboard;
