import React, { useEffect, useState } from "react";
import AfterLoginNavbar from "../../../components/afterLoginNavbar/afterLoginNavbar";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { getProfile } from "../../../services/customer";
import { toast } from "react-toastify";
import "./ownerProfile.css";
import { getOwnerProfile } from "../../../services/owner";

const OwnerProfile = () => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const result = await getOwnerProfile();
    if (result["status"] === "success") {
      setProfile(result["data"][0]);
      //   toast.success("got the profile");
    } else toast.error("Unable to get profile");
  };

  return (
    <>
      <AfterLoginNavbar />
      <Box display="flex" justifyContent="center" m={2}>
        <Card className="myCard" variant="outlined" sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              <h2>User Details</h2>
              <hr />
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  <h5>Name: {profile?.name}</h5>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  <h5>Email: {profile?.email}</h5>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  <h5>Phone: {profile?.phone}</h5>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  <h5>Address: {profile?.address}</h5>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default OwnerProfile;
