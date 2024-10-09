import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"
import "./LoginAndRegister.css"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tab"

function LoginAndRegister() {
    return (
        <div className="bg-grid">
            <div className="main h-screen">
                <Navigation styling="backdrop-blur-lg border-b border-solid border-gray-100/5" />
                <div className="flex justify-center items-center my-8">
                    <Tabs defaultValue="signIn" className="w-[400px] text-white">
                        <TabsList className="flex w-full justify-between rounded-lg p-1">
                            <TabsTrigger
                                value="signIn"
                                className="w-full py-2 text-center font-semibold transition-colors duration-300 ease-in-out rounded-lg data-[static=active]:border-purple-200 data-[state=active]:bg-purple-200/10 data-[state=active]:bg-opacity-100 data-[state=active]:border-opacity-100 hover:text-purple-400"
                            >
                                Sign in
                            </TabsTrigger>
                            <TabsTrigger
                                value="signUp"
                                className="w-full py-2 text-center font-semibold transition-colors duration-300 ease-in-out rounded-lg data-[static=active]:border-purple-200 data-[state=active]:bg-purple-200/10 data-[state=active]:bg-opacity-100 data-[state=active]:border-opacity-100 hover:text-purple-400"
                            >
                                Sign up
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="signIn">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Sign in</CardTitle>
                                    <CardDescription>
                                        Access your account to view your personalized settings and preferences.<br />
                                        If you've forgotten your password, click on "forgot Password".
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Emailadress</Label>
                                        <Input id="name" placeholder="Celestia@domain.com" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="username">Password</Label>
                                        <Input id="username" type="password" />
                                    </div>
                                    <Link to="#" className="text-gray-300 hover:text-white">Forgot password</Link>
                                </CardContent>
                                <CardFooter>
                                    <Button>Sign in</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="signUp">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Sign up</CardTitle>
                                    <CardDescription>
                                        Create your account to unlock personalized features and enjoy a tailored experience. Registering allows you to save your preferences, access exclusive content, and manage your settings effortlessly.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="current">Username</Label>
                                        <Input id="current" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="current">Emailadress</Label>
                                        <Input id="current" type="email" placeholder="Celestia@domain.com" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="new">Password</Label>
                                        <Input id="new" type="password" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="new">Repeat password</Label>
                                        <Input id="new" type="password" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="new">Birthday</Label>
                                        <Input id="new" type="date" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Sign up</Button>
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

