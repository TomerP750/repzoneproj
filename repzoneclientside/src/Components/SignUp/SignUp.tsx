import "./SignUp.css";
// import {useState} from "react";
// import {
//     Box,
//     Button,
//     Container,
//     createTheme,
//     Snackbar,
//     TextField,
//     ThemeProvider,
//     Typography
// } from "@mui/material";
// import {NavLink} from "react-router-dom";
// import {useForm} from "react-hook-form";
// import {User} from "../../Models/User.ts";
// import userService from "../../Services/UserService.ts";
// // import {useForm} from "react-hook-form";
// // import {User} from "../../Models/User.ts";
// // import userService from "../../Services/UserService.ts";
//
//
//
// export function SignUp(): JSX.Element {
//
//     const { register, handleSubmit, formState: {errors}, setError, clearErrors } = useForm<User>();
//
//     const [email, setEmail] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const [userName, setUserName] = useState<string>('');
//     const [firstName, setFirstName] = useState<string>('');
//     const [lastName, setLastName] = useState<string>('');
//     const [address, setAddress] = useState<string>('');
//     const [phoneNumber, setPhoneNumber] = useState<string>('');
//
//     const [emailError, setEmailError] = useState<boolean>(false);
//     const [passwordError, setPasswordError] = useState<boolean>(false);
//     const [userNameError, setUserNameError] = useState<boolean>(false);
//     const [firstNameError, setFirstNameError] = useState<boolean>(false);
//     const [lastNameError, setLastNameError] = useState<boolean>(false);
//     const [addressError, setAddressError] = useState<boolean>(false);
//     const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
//
//     const [emailErrorText, setEmailErrorText] = useState<string>('');
//     const [passwordErrorText, setPasswordErrorText] = useState<string>('');
//     const [userNameErrorText, setUserNameErrorText] = useState<string>('');
//     const [firstNameErrorText, setFirstNameErrorText] = useState<string>('');
//     const [lastNameErrorText, setLastNameErrorText] = useState<string>('');
//     const [addressErrorText, setAddressErrorText] = useState<string>('');
//     const [phoneNumberErrorText, setPhoneNumberErrorText] = useState<string>('');
//
//     const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
//
//     function sendUser(user: User) {
//         userService.register(user)
//             .then(res=>alert(res))
//             .catch(err=>alert(err.response.data))
//     }
//
//     const validateEmail = (emailVal: string) => {
//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
//         if (!emailVal) {
//             setEmailError(true);
//             setEmailErrorText("Please enter your email");
//         } else if (!emailRegex.test(emailVal)) {
//             setEmailError(true);
//             setEmailErrorText("Please enter a valid email address");
//         } else {
//             setEmailError(false);
//             setEmailErrorText("");
//         }
//         setEmail(emailVal);
//     };
//
//     const handleEmailFocus = () => {
//         setEmailError(false);
//         setEmailErrorText("");
//     };
//
//     const validatePassword = (passwordVal: string) => {
//         if (!passwordVal) {
//             setPasswordError(true);
//             setPasswordErrorText("Please enter your password");
//         } else if (passwordVal.length < 6) {
//             setPasswordError(true);
//             setPasswordErrorText("Password needs at least 6 characters");
//         } else {
//             setPasswordError(false);
//             setPasswordErrorText("");
//         }
//         setPassword(passwordVal);
//     };
//
//     const validateUserName = (userNameVal: string) => {
//         if (!userNameVal) {
//             setUserNameError(true);
//             setUserNameErrorText("Please enter your username");
//         } else if (userNameVal.length < 6) {
//             setUserNameError(true);
//             setUserNameErrorText("Username needs to be at least 6 characters");
//         } else {
//             setUserNameError(false);
//             setUserNameErrorText("");
//         }
//         setUserName(userNameVal);
//     };
//
//     const validateFirstName = (firstNameVal: string) => {
//         if (!firstNameVal) {
//             setFirstNameError(true);
//             setFirstNameErrorText("Please enter your first name");
//         } else {
//             setFirstNameError(false);
//             setFirstNameErrorText("");
//         }
//         setFirstName(firstNameVal);
//     };
//
//     const validateLastName = (lastNameVal: string) => {
//         if (!lastNameVal) {
//             setLastNameError(true);
//             setLastNameErrorText("Please enter your last name");
//         } else {
//             setLastNameError(false);
//             setLastNameErrorText("");
//         }
//         setLastName(lastNameVal);
//     };
//
//     const validateAddress = (addressVal: string) => {
//         if (!addressVal) {
//             setAddressError(true);
//             setAddressErrorText("Please enter your address");
//         } else {
//             setAddressError(false);
//             setAddressErrorText("");
//         }
//         setAddress(addressVal);
//     };
//
//     const validatePhoneNumber = (phoneNumberVal: string) => {
//         const phoneRegex = /^[0-9]{10}$/;
//         if (!phoneNumberVal) {
//             setPhoneNumberError(true);
//             setPhoneNumberErrorText("Please enter your phone number");
//         } else if (!phoneRegex.test(phoneNumberVal)) {
//             setPhoneNumberError(true);
//             setPhoneNumberErrorText("Please enter a valid phone number");
//         } else {
//             setPhoneNumberError(false);
//             setPhoneNumberErrorText("");
//         }
//         setPhoneNumber(phoneNumberVal);
//     };
//
//
//     const darkTheme = createTheme({
//         palette: {
//             mode: 'dark',
//         },
//     });
//
//     return (
//         <ThemeProvider theme={darkTheme}>
//             <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
//                 <Typography variant="h5" align="center" gutterBottom>
//                     Sign Up
//                 </Typography>
//
//                 <form onSubmit={handleSubmit(sendUser)}>
//                     <Box sx={{ display: "grid", gap: 2 }}>
//                         {/* Email Field */}
//                         <TextField
//                             label="Email"
//                             variant="outlined"
//                             fullWidth
//                             {...register("email", { required: "Please enter your email" })}
//                             onChange={(e) => validateEmail(e.target.value)}
//
//                             error={emailError}  // Apply red border if there's an error
//                             helperText={emailError ? emailErrorText : ""}  // Show error message
//                             onFocus={handleEmailFocus}
//                         />
//
//                         {/* Password Field */}
//                         <TextField
//                             label="Password"
//                             variant="outlined"
//                             type="password"
//                             fullWidth
//                             {...register("password", { required: "Please enter your password" })}
//                             onChange={(e) => validatePassword(e.target.value)}
//                             error={passwordError}  // Apply red border if there's an error
//                             helperText={passwordError ? passwordErrorText : ""}  // Show error message
//                         />
//
//                         {/* Username Field */}
//                         <TextField
//                             label="Username"
//                             variant="outlined"
//                             fullWidth
//                             {...register("username", { required: "Please enter your username" })}
//                             onChange={(e) => validateUserName(e.target.value)}
//                             error={userNameError}  // Apply red border if there's an error
//                             helperText={userNameError ? userNameErrorText : ""}  // Show error message
//                         />
//
//                         {/* First Name Field */}
//                         <TextField
//                             label="First Name"
//                             variant="outlined"
//                             fullWidth
//                             {...register("firstName", { required: "Please enter your first name" })}
//                             onChange={(e) => validateFirstName(e.target.value)}
//                             error={firstNameError}  // Apply red border if there's an error
//                             helperText={firstNameError ? firstNameErrorText : ""}  // Show error message
//                         />
//
//                         {/* Last Name Field */}
//                         <TextField
//                             label="Last Name"
//                             variant="outlined"
//                             fullWidth
//                             {...register("lastName", { required: "Please enter your last name" })}
//                             onChange={(e) => validateLastName(e.target.value)}
//                             error={lastNameError}  // Apply red border if there's an error
//                             helperText={lastNameError ? lastNameErrorText : ""}  // Show error message
//                         />
//
//                         {/* Address Field */}
//                         <TextField
//                             label="Address"
//                             variant="outlined"
//                             fullWidth
//                             {...register("address", { required: "Please enter your address" })}
//                             onChange={(e) => validateAddress(e.target.value)}
//                             error={addressError}  // Apply red border if there's an error
//                             helperText={addressError ? addressErrorText : ""}  // Show error message
//                         />
//
//                         {/* Phone Number Field */}
//                         <TextField
//                             label="Phone Number"
//                             variant="outlined"
//                             fullWidth
//                             {...register("phoneNumber", { required: "Please enter your phone number" })}
//                             onChange={(e) => validatePhoneNumber(e.target.value)}
//                             error={phoneNumberError}  // Apply red border if there's an error
//                             helperText={phoneNumberError ? phoneNumberErrorText : ""}  // Show error message
//                         />
//
//                         <Button
//                             type="submit"
//                             variant="contained"
//                             color="primary"
//                             fullWidth
//                             sx={{ mt: 2 }}
//                         >
//                             Log In
//                         </Button>
//                     </Box>
//                 </form>
//
//                 <Snackbar
//                     open={openSnackbar}
//                     autoHideDuration={3000}
//                     onClose={() => setOpenSnackbar(false)}
//                     message="Login Successful"
//                 />
//             </Container>
//         </ThemeProvider>
//     );
// }

import "./SignUp.css";
import { useState } from "react";
import {
    Box,
    Button,
    Container,
    createTheme,
    Snackbar,
    TextField,
    ThemeProvider,
    Typography,
    Grid,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User } from "../../Models/User.ts";
import userService from "../../Services/UserService.ts";

export function SignUp(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState,
    } = useForm<User>();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [userNameError, setUserNameError] = useState<boolean>(false);
    const [firstNameError, setFirstNameError] = useState<boolean>(false);
    const [lastNameError, setLastNameError] = useState<boolean>(false);
    const [addressError, setAddressError] = useState<boolean>(false);
    const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);

    const [emailErrorText, setEmailErrorText] = useState<string>("");
    const [passwordErrorText, setPasswordErrorText] = useState<string>("");
    const [userNameErrorText, setUserNameErrorText] = useState<string>("");
    const [firstNameErrorText, setFirstNameErrorText] = useState<string>("");
    const [lastNameErrorText, setLastNameErrorText] = useState<string>("");
    const [addressErrorText, setAddressErrorText] = useState<string>("");
    const [phoneNumberErrorText, setPhoneNumberErrorText] = useState<string>("");

    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

    function sendUser(user: User) {
        userService
            .register(user)
            .then((res) => alert(res))
            .catch((err) => alert(err.response.data));
    }

    const validateEmail = (emailVal: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
        if (!emailVal) {
            setEmailError(true);
            setEmailErrorText("Please enter your email");
        } else if (!emailRegex.test(emailVal)) {
            setEmailError(true);
            setEmailErrorText("Please enter a valid email address");
        } else {
            setEmailError(false);
            setEmailErrorText("");
        }
        setEmail(emailVal);
    };

    const handleEmailFocus = () => {
        setEmailError(false);
        setEmailErrorText("");
    };

    const validatePassword = (passwordVal: string) => {
        if (!passwordVal) {
            setPasswordError(true);
            setPasswordErrorText("Please enter your password");
        } else if (passwordVal.length < 6) {
            setPasswordError(true);
            setPasswordErrorText("Password needs at least 6 characters");
        } else {
            setPasswordError(false);
            setPasswordErrorText("");
        }
        setPassword(passwordVal);
    };

    const validateUserName = (userNameVal: string) => {
        if (!userNameVal) {
            setUserNameError(true);
            setUserNameErrorText("Please enter your username");
        } else if (userNameVal.length < 6) {
            setUserNameError(true);
            setUserNameErrorText("Username needs to be at least 6 characters");
        } else {
            setUserNameError(false);
            setUserNameErrorText("");
        }
        setUserName(userNameVal);
    };

    const validateFirstName = (firstNameVal: string) => {
        if (!firstNameVal) {
            setFirstNameError(true);
            setFirstNameErrorText("Please enter your first name");
        } else {
            setFirstNameError(false);
            setFirstNameErrorText("");
        }
        setFirstName(firstNameVal);
    };

    const validateLastName = (lastNameVal: string) => {
        if (!lastNameVal) {
            setLastNameError(true);
            setLastNameErrorText("Please enter your last name");
        } else {
            setLastNameError(false);
            setLastNameErrorText("");
        }
        setLastName(lastNameVal);
    };

    const validateAddress = (addressVal: string) => {
        if (!addressVal) {
            setAddressError(true);
            setAddressErrorText("Please enter your address");
        } else {
            setAddressError(false);
            setAddressErrorText("");
        }
        setAddress(addressVal);
    };

    const validatePhoneNumber = (phoneNumberVal: string) => {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneNumberVal) {
            setPhoneNumberError(true);
            setPhoneNumberErrorText("Please enter your phone number");
        } else if (!phoneRegex.test(phoneNumberVal)) {
            setPhoneNumberError(true);
            setPhoneNumberErrorText("Please enter a valid phone number");
        } else {
            setPhoneNumberError(false);
            setPhoneNumberErrorText("");
        }
        setPhoneNumber(phoneNumberVal);
    };

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Sign Up
                </Typography>

                <form onSubmit={handleSubmit(sendUser)}>
                    <Box sx={{ display: "grid", gap: 2 }}>
                        {/* Email and Password Fields in Row */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    {...register("email", {
                                        required: "Please enter your email",
                                    })}
                                    onChange={(e) => validateEmail(e.target.value)}
                                    error={emailError} // Apply red border if there's an error
                                    helperText={emailError ? emailErrorText : ""} // Show error message
                                    onFocus={handleEmailFocus}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    {...register("password", {
                                        required: "Please enter your password",
                                    })}
                                    onChange={(e) => validatePassword(e.target.value)}
                                    error={passwordError} // Apply red border if there's an error
                                    helperText={passwordError ? passwordErrorText : ""} // Show error message
                                />
                            </Grid>
                        </Grid>

                        {/* Username and Name Fields in Row */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    {...register("username", {
                                        required: "Please enter your username",
                                    })}
                                    onChange={(e) => validateUserName(e.target.value)}
                                    error={userNameError} // Apply red border if there's an error
                                    helperText={userNameError ? userNameErrorText : ""} // Show error message
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    {...register("firstName", {
                                        required: "Please enter your first name",
                                    })}
                                    onChange={(e) => validateFirstName(e.target.value)}
                                    error={firstNameError} // Apply red border if there's an error
                                    helperText={firstNameError ? firstNameErrorText : ""} // Show error message
                                />
                            </Grid>
                        </Grid>

                        {/* Last Name and Address Fields in Row */}
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    {...register("lastName", {
                                        required: "Please enter your last name",
                                    })}
                                    onChange={(e) => validateLastName(e.target.value)}
                                    error={lastNameError} // Apply red border if there's an error
                                    helperText={lastNameError ? lastNameErrorText : ""} // Show error message
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Address"
                                    variant="outlined"
                                    fullWidth
                                    {...register("address", {
                                        required: "Please enter your address",
                                    })}
                                    onChange={(e) => validateAddress(e.target.value)}
                                    error={addressError} // Apply red border if there's an error
                                    helperText={addressError ? addressErrorText : ""} // Show error message
                                />
                            </Grid>
                        </Grid>

                        {/* Phone Number Field */}
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            {...register("phoneNumber", {
                                required: "Please enter your phone number",
                            })}
                            onChange={(e) => validatePhoneNumber(e.target.value)}
                            error={phoneNumberError} // Apply red border if there's an error
                            helperText={phoneNumberError ? phoneNumberErrorText : ""} // Show error message
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </form>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={() => setOpenSnackbar(false)}
                    message="Sign Up Successful"
                />
            </Container>
        </ThemeProvider>
    );
}


