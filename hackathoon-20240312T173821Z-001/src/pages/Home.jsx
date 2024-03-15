import React, {useEffect, useState} from "react";
import {Navbar} from "../components/Navbar";
import {read_user_data} from "../config/firebase/firebase_methods";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {database} from "../config/firebase/index";
import {child, onValue, push, ref, set, update} from "firebase/database";
import {Container,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';


export const Home = () => {
  const [donorsData, setdonorsData] = useState([]);

  useEffect(() => {

    const database_ref = ref(database, "users/");
    onValue(database_ref, (snapshot) => {
      const data = snapshot.val();
      const convert_to_array = Object.values(data);
      setdonorsData(convert_to_array);

    });

  }, []);


  return <Container maxWidth="lg">

    <br/><br/><br/><br/><br/>
    <Typography variant="h4" gutterBottom>
      All Users Data
    </Typography>

    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Blood Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donorsData.map((current) => (
            <TableRow key={current.id}>
              <TableCell>{current.first_name}</TableCell>
              <TableCell>{current.last_name}</TableCell>
              <TableCell>{current.email}</TableCell>
              <TableCell>{current.blood_type}</TableCell>
              {/* Add more cells for additional fields */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>;
};



