import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { format } from "date-fns";

const SingleBooking = ({ booking }) => {
  return (
    <>
      <Box display="flex" justifyContent="center" m={2}>
        <Card variant="outlined" sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {booking.title}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  Status: {booking.status}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  From: {format(new Date(booking.from_date), "PPPpp")}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  To: {format(new Date(booking.to_date), "PPPpp")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  Bill: ₹{booking.bill}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default SingleBooking;
