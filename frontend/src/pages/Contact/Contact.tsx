import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
}

const Contact = (): JSX.Element => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      contact: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            お問い合わせフォーム
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        label="姓"
                        autoComplete="family-name"
                        autoFocus
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        label="名"
                        autoComplete="given-name"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        label="メールアドレス"
                        autoComplete="email"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="contact"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="お問い合わせ内容"
                        placeholder="お問い合わせ内容をご入力ください"
                        multiline
                        fullWidth
                        rows={4}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              送信
            </Button>
          </form>
        </Box>
      </Container>
      <DevTool control={control} />
    </>
  );
};

export default Contact;
