import React, { useRef, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./LoginAndRegister.css";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tab";
import { log } from "console";
import { ISignIn, ISignUp } from "../../shared/types";

enum FormType {
  SignIn = "signIn",
  SignUp = "signUp",
}

function LoginAndRegister() {
  // Username regex: validates a username with at least 3 characters, allowing letters, numbers, dots, underscores, and hyphens.
  const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/;

  // Email regex: validates a standard email format.
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  // Password regex: validates a password with at least 8 characters, requiring uppercase, lowercase, digit, and special character.
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const [SignIn, setSignIn] = useState<ISignIn>({
    Username: "",
    Email: "",
    Password: "",
  });

  const [SignUp, setSignUp] = useState<ISignUp>({
    Username: "",
    Email: "",
    Password: "",
    PasswordConfirm: "",
    DateOfBirth: new Date(),
  });

  // const emailErrorRef = useRef();

  const handleChangeSignin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignIn({
      ...SignIn,
      [name]: value,
    });
  };

  const handleChangeSignup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUp({
      ...SignUp,
      [name]: value,
    });
  };

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (singInValidation(SignIn)) {
      console.log("Form valid");
    } else {
      console.log("Form not valid");
    }

    console.log(SignIn);
  };

  function singInValidation(signInFields: ISignIn): boolean {
    if (
      !usernameRegex.test(signInFields.Username) &&
      !emailRegex.test(signInFields.Email)
    ) {
      return false;
    }

    if (!passwordRegex.test(signInFields.Password)) {
      return false;
    }

    return true;
  }

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signUpValidation(SignUp)) {
      console.log("Form valid");
    } else {
      console.log("Form not valid");
    }

    console.log(SignUp);
  };

  function signUpValidation(signUpFields: ISignUp): boolean {
    if (!usernameRegex.test(signUpFields.Username)) {
      return false;
    }

    if (!emailRegex.test(signUpFields.Email)) {
      return false;
    }

    if (
      !passwordRegex.test(signUpFields.Password) &&
      !passwordRegex.test(signUpFields.PasswordConfirm)
    ) {
      return false;
    }

    if (signUpFields.Password !== signUpFields.PasswordConfirm) {
      return false;
    }

    // if user is atleast 13;
    const dob = new Date(signUpFields.DateOfBirth);
    const today = new Date();
    if (!(today.getFullYear() - dob.getFullYear() >= 13)) {
      return false;
    }

    return true;
  }

  return (
    <div className="bg-grid">
      <div className="main h-screen flex flex-col">
        <Navigation styling="backdrop-blur-lg border-b border-solid border-gray-100/5" />
        <div className="flex flex-grow justify-center items-start mt-8">
          <Tabs defaultValue={FormType.SignIn} className="w-[400px] text-white">
            <TabsList className="flex w-full gap-2 justify-between rounded-lg p-1">
              <TabsTrigger
                value={FormType.SignIn}
                className="w-full text-center font-semibold transition-colors duration-300 ease-in-out rounded-lg  data-[state=active]:bg-purple-200/10 hover:text-purple-400"
              >
                Sign in
              </TabsTrigger>
              <TabsTrigger
                value={FormType.SignUp}
                className="w-full text-center font-semibold transition-colors duration-300 ease-in-out rounded-lg  data-[state=active]:bg-purple-200/10 hover:text-purple-400"
              >
                Sign up
              </TabsTrigger>
            </TabsList>

            <TabsContent value={FormType.SignIn}>
              <Card className="border-purple-200/30">
                <CardHeader>
                  <CardTitle>Sign in</CardTitle>
                  <CardDescription className="text-purple-100/80">
                    Access your account to view your personalized settings and
                    preferences.
                    <br />
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    className="flex flex-col gap-2"
                    onSubmit={handleSignIn}
                    method="post"
                    autoComplete="on"
                  >
                    <div>
                      <Label htmlFor="loginEmailOrUsername">
                        Email address or username
                      </Label>
                      <Input
                        className="inputBox"
                        id="loginEmailOrUsername"
                        placeholder="Celestia@domain.com"
                        name="Email"
                        value={SignIn.Email}
                        onChange={handleChangeSignin}
                      />
                      {/* 
                      <div ref={emailErrorRef} className="text-red-800 text-sm">
                        Invalid email or username
                      </div>*/}
                    </div>
                    <div>
                      <Label htmlFor="loginPassword">Password</Label>
                      <Input
                        className="inputBox"
                        id="loginPassword"
                        type="password"
                        name="Password"
                        onChange={handleChangeSignin}
                      />
                    </div>
                    <Link to="#" className="text-gray-300 hover:text-white">
                      Forgot password
                    </Link>

                    <button
                      role="submit"
                      className="bg-purple-800 p-2 px-4 rounded-md w-fit"
                    >
                      Sign in
                    </button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value={FormType.SignUp}>
              <Card className="border-purple-200/30">
                <CardHeader>
                  <CardTitle>Sign up</CardTitle>
                  <CardDescription className="text-purple-100/80">
                    Create your account to unlock personalized features and
                    enjoy a tailored experience.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <form onSubmit={handleSignUp} method="post">
                    <div className="space-y-1">
                      <Label htmlFor="registerUsername">Username</Label>
                      <Input
                        className="inputBox"
                        id="registerUsername"
                        name="Username"
                        onChange={handleChangeSignup}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="registerEmail">Email address</Label>
                      <Input
                        className="inputBox"
                        id="registerEmail"
                        type="email"
                        name="Email"
                        placeholder="Celestia@domain.com"
                        onChange={handleChangeSignup}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="registerPassword">Password</Label>
                      <Input
                        className="inputBox"
                        id="registerPassword"
                        type="password"
                        name="Password"
                        onChange={handleChangeSignup}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="registerRepeatPassword">
                        Repeat password
                      </Label>
                      <Input
                        className="inputBox"
                        id="registerRepeatPassword"
                        type="password"
                        name="PasswordConfirm"
                        onChange={handleChangeSignup}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="registerBirthday">Birthday</Label>
                      <Input
                        className="inputBox"
                        id="registerBirthday"
                        type="date"
                        name="DateOfBirth"
                        onChange={handleChangeSignup}
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSignUp}>Sign up</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LoginAndRegister;
