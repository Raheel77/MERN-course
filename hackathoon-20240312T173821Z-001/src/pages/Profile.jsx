import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
// import {database} from "../config/firebase";
import {onAuthStateChanged} from "firebase/auth";
import Typography from '@mui/material/Typography';

import {auth, database} from "../config/firebase/index";
import {child, onValue, push, ref, set, update} from "firebase/database";
import {set_user_auth} from "../store/slices/user_auth_slice";
import {Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
// import Typography from "./Home";

export const Profile = () => {

  const [donorsData, setdonorsData] = useState([]);
  const [user, setUser] = useState([]);
  // const user_auth_state = useSelector((state) => state.user_auth);

  useEffect(() => {
    const database_ref = ref(database, "users/");
    onValue(database_ref, (snapshot) => {
      const data = snapshot.val();
      const convert_to_array = Object.values(data);
      setdonorsData(convert_to_array);
    });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });

  }, []);

  const result = donorsData.filter((current) => current.email === user.email);


  // console.log('User', user.email);
  // console.log('donorsData', donorsData);
  // console.log('result', result);


  return <Container maxWidth="lg" className={'pt-24'}>

    <Typography variant="h4" gutterBottom>
      User Profile
    </Typography>
    <TableContainer component={Paper}>
      <Table>
        {result.map((current) => {
            let relatedBPGroups = '';
            if (current.blood_type === 'O+' || current.blood_type === 'O-') {
              relatedBPGroups = 'O, A, B, AB'
            }
            if (current.blood_type === 'A+' || current.blood_type === 'A-') {
              relatedBPGroups = 'A, AB'
            }
            if (current.blood_type === 'B+' || current.blood_type === 'B-') {
              relatedBPGroups = 'B, AB'
            }
            if (current.blood_type === 'AB+' || current.blood_type === 'AB-') {
              relatedBPGroups = 'AB'
            }

            return (
              <TableBody key={current.id}>
                <TableRow>
                  <TableCell><b>Full name</b></TableCell>
                  <TableCell>{current.first_name} {current.last_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Email</b></TableCell>
                  <TableCell>{current.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Donor Blood Group</b></TableCell>
                  <TableCell>{current.blood_type}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Donor can donate to following groups </b></TableCell>
                  <TableCell>{relatedBPGroups}</TableCell>
                </TableRow>
              </TableBody>
            )
          }
        )}
      </Table>
    </TableContainer>
  </Container>
};
