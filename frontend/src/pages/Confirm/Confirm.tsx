import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { type IFormInput } from "../Contact/Contact";

const Confirm = (): JSX.Element => {
  const location = useLocation();
  console.log(location.pathname);
  const data = location.state as IFormInput;
  return (
    <>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid xs={4}>
            <div>姓</div>
          </Grid>
          <Grid xs={8}>
            <div>{data.lastName}</div>
          </Grid>
          <Grid xs={4}>
            <div>名</div>
          </Grid>
          <Grid xs={8}>
            <div>{data.firstName}</div>
          </Grid>
          <Grid xs={4}>
            <div>メールアドレス</div>
          </Grid>
          <Grid xs={8}>
            <div>{data.email}</div>
          </Grid>
          <Grid xs={4}>
            <div>お問い合わせ内容</div>
          </Grid>
          <Grid xs={8}>
            <div>{data.contact}</div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Confirm;
