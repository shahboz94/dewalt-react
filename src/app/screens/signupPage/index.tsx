import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup attempt with:", { name, phone, password });
    // Replace with signup logic
  };

  return (
    <Box
      sx={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url('/img/dewalt_perform_protect_1920x1080_0.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        p: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: 520,
          width: "100%",
          bgcolor: "rgba(255,255,255,0.95)",
          borderRadius: 2,
          boxShadow: 3,
          p: 4,
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Create an Account
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Use your name and phone number to sign up.
        </Typography>

        <Stack spacing={2}>
          <TextFieldCustom
            label="Full Name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />

          <TextFieldCustom
            label="Phone Number"
            value={phone}
            onChange={(e: any) => setPhone(e.target.value)}
            type="tel"
          />

          <TextFieldCustom
            label="Password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            type="password"
          />

          <TextFieldCustom
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
            type="password"
          />

          <Button variant="contained" onClick={handleSignup} fullWidth>
            Sign Up
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

function TextFieldCustom({ label, ...props }: any) {
  return (
    <input
      aria-label={label}
      placeholder={label}
      {...props}
      style={{
        width: "100%",
        padding: "12px 14px",
        borderRadius: 8,
        border: "1px solid #ddd",
        outline: "none",
        fontSize: 16,
      }}
    />
  );
}
