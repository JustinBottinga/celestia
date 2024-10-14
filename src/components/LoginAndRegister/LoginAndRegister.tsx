import React, { useState } from "react";
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

enum FormType {
  SignIn = "signIn",
  SignUp = "signUp",
}

function LoginAndRegister() {
  // State for Sign In inputs
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  // State for Sign Up inputs
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpRepeatPassword, setSignUpRepeatPassword] = useState("");
  const [signUpBirthday, setSignUpBirthday] = useState("");

  const handleSignIn = () => {
    console.log("Sign In Credentials:");
    console.log("Email/Username:", signInEmail);
    console.log("Password:", signInPassword);
  };

  const handleSignUp = () => {
    console.log("Sign Up Credentials:");
    console.log("Username:", signUpUsername);
    console.log("Email:", signUpEmail);
    console.log("Password:", signUpPassword);
    console.log("Repeat Password:", signUpRepeatPassword);
    console.log("Birthday:", signUpBirthday);
  };

  // Define event handlers with types
  const handleSignInEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInEmail(e.target.value);
  };

  const handleSignInPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignInPassword(e.target.value);
  };

  const handleSignUpUsernameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignUpUsername(e.target.value);
  };

  const handleSignUpEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpEmail(e.target.value);
  };

  const handleSignUpPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignUpPassword(e.target.value);
  };

  const handleSignUpRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignUpRepeatPassword(e.target.value);
  };

  const handleSignUpBirthdayChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignUpBirthday(e.target.value);
  };

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
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="loginEmailOrUsername">
                      Email address or username
                    </Label>
                    <Input
                      className="inputBox"
                      id="loginEmailOrUsername"
                      placeholder="Celestia@domain.com"
                      value={signInEmail}
                      onChange={handleSignInEmailChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="loginPassword">Password</Label>
                    <Input
                      className="inputBox"
                      id="loginPassword"
                      type="password"
                      value={signInPassword}
                      onChange={handleSignInPasswordChange}
                    />
                  </div>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    Forgot password
                  </Link>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSignIn}>Sign in</Button>
                </CardFooter>
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
                  <div className="space-y-1">
                    <Label htmlFor="registerUsername">Username</Label>
                    <Input
                      className="inputBox"
                      id="registerUsername"
                      value={signUpUsername}
                      onChange={handleSignUpUsernameChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="registerEmail">Email address</Label>
                    <Input
                      className="inputBox"
                      id="registerEmail"
                      type="email"
                      placeholder="Celestia@domain.com"
                      value={signUpEmail}
                      onChange={handleSignUpEmailChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="registerPassword">Password</Label>
                    <Input
                      className="inputBox"
                      id="registerPassword"
                      type="password"
                      value={signUpPassword}
                      onChange={handleSignUpPasswordChange}
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
                      value={signUpRepeatPassword}
                      onChange={handleSignUpRepeatPasswordChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="registerBirthday">Birthday</Label>
                    <Input
                      className="inputBox"
                      id="registerBirthday"
                      type="date"
                      value={signUpBirthday}
                      onChange={handleSignUpBirthdayChange}
                    />
                  </div>
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
