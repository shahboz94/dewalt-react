import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login attempt with:", { name, phone, password });
    // Replace with your authentication logic
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
          maxWidth: 420,
          width: "100%",
          bgcolor: "rgba(255,255,255,0.92)",
          borderRadius: 2,
          boxShadow: 3,
          p: 4,
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Welcome Back
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Sign in with your name and phone number.
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

          <Button variant="contained" onClick={handleLogin} fullWidth>
            Login
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
