import "./Login.css";
import {useState} from "react";
import {
    Box,
    Button,
    Container,
    createTheme,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import {NavLink} from "react-router-dom";
import userService from "../../Services/UserService.ts";
// import {useForm} from "react-hook-form";
// import {User} from "../../Models/User.ts";
// import userService from "../../Services/UserService.ts";



export function Login(): JSX.Element {

    // const { register, handleSubmit, formState: {errors}, setError, clearErrors } = useForm<User>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();



    function login(email:string, password:string) {
        userService.login(email, password)
            .then(res=>alert(res))
            .catch(err=>alert(err.response.data))
    }

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>

                <form>
                    <Box sx={{ display: "grid", gap: 2 }}>
                        {/* Email Field */}
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            onChange={handleEmailChange}
                        />

                        {/* Password Field */}
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            onChange={handlePasswordChange}
                        />

                        <Box sx={{ mt: 2, textAlign: "center" }}>
                            <Typography variant="body2">
                                Don't have an account?{" "}
                                <NavLink to="/signup" style={{ textDecoration: "none", color: "#1976d2" }}>
                                    Sign Up
                                </NavLink>
                            </Typography>
                        </Box>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Log In
                        </Button>
                    </Box>
                </form>

            </Container>
        </ThemeProvider>
    );
}
