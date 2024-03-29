import React from 'react';
import {
    Button,
    Card,
    CardContent,
    Checkbox,
    Divider,
    Grid,
    FormControl,
    FormControlLabel,
    TextField,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';

import { Link } from 'react-router-dom';
import clsx from 'clsx';
import logo from './BrandifyLOGO.svg';
const useStyles = makeStyles(theme => ({
    root: {
        background: `linear-gradient(to bottom, #457fca, #5691c8)`,

        height: '100%',
    },
    card: {
        height: '100%',
    },
}));
//#4169E1
function Login2Page() {
    const classes = useStyles();

    // const { form, handleChange, resetForm } = useForm({
    //     email: '',
    //     password: '',
    //     remember: true,
    // });
    function handleChange() {
        return 'change';
    }
    function isFormValid() {
        // return form.email.length > 0 && form.password.length > 0;
        return 'valid';
    }

    function handleSubmit(ev) {
        // ev.preventDefault();
        // resetForm();
        return 'submit';
    }

    return (
        <Grid
            container
            justify="space-between"
            alignItems="stretch"
            className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0')}
        >
            <Grid
                item
                xs={12}
                md={8}
                className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left"
            >
                <div style={{ padding: '12.8rem' }}>
                    <img src={logo} />
                    <div animation="transition.slideUpIn" delay={300}>
                        <Typography variant="h3" style={{ color: 'white' }} className="font-light">
                            Welcome to Brandify!
                        </Typography>
                    </div>

                    <div delay={400}>
                        <Typography
                            variant="subtitle1"
                            style={{ color: 'white' }}
                            color="inherit"
                            className="max-w-512 mt-16"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel
                            convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis.
                        </Typography>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card className={classes.card} square>
                    <CardContent
                        style={{
                            display: 'flex',
                            padding: 32,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 "
                    >
                        <Typography style={{ marginBottom: 32 }} variant="h6" className="md:w-full mb-32">
                            LOGIN TO YOUR ACCOUNT
                        </Typography>

                        <form
                            name="loginForm"
                            noValidate
                            className="flex flex-col justify-center w-full"
                            onSubmit={handleSubmit}
                        >
                            <TextField
                                style={{ marginBottom: 16 }}
                                className="mb-16"
                                label="Email"
                                autoFocus
                                type="email"
                                name="email"
                                value={'form.email'}
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                            />

                            <TextField
                                style={{ marginBottom: 16 }}
                                className="mb-16"
                                label="Password"
                                type="password"
                                name="password"
                                value={'form.password'}
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                            />

                            <div className="flex items-center justify-between">
                                {/* LINK */}
                                <div className="font-medium" to="/pages/auth/forgot-password-2">
                                    Forgot Password?
                                </div>
                            </div>

                            <Button
                                style={{ marginTop: 16, width: '100%', marginLeft: 'auto' }}
                                variant="contained"
                                color="primary"
                                className="w-full mx-auto mt-16"
                                aria-label="LOG IN"
                                disabled={!isFormValid()}
                            >
                                LOGIN
                            </Button>
                        </form>

                        <div
                            style={{
                                display: 'flex',
                                paddingTop: 8,
                                paddingBottom: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Divider style={{ width: 32 }} className="w-32" />
                            <span style={{ marginLeft: 8, fontWeight: 'bold' }} className="mx-8 font-bold">
                                OR
                            </span>
                            <Divider style={{ width: 32 }} className="w-32" />
                        </div>
                        <Button
                            style={{ width: '100%', marginBottom: 8 }}
                            variant="contained"
                            color="secondary"
                            size="small"
                        >
                            Log in with Google
                        </Button>

                        <Grid container alignItems="center" direction="column" justify="center" spacing={10}>
                            <Grid item xs={12}>
                                <span className="font-medium">Don't have an account?</span>
                                {/* LINK */}
                                <div className="font-medium" to="/pages/auth/register-2">
                                    Create an account
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Login2Page;
