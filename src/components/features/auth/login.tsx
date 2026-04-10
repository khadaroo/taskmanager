import BackButton from "@/components/block/back-button";
import LoginForm from "@/components/block/login-form";
import Logo from "@/components/block/logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <Card className="flex w-full max-w-md flex-col gap-8 px-5 py-8 sm:px-8 sm:py-10">
      <BackButton href="/">Back to home</BackButton>
      <Logo />
      <CardHeader className="space-y-1 p-0">
        <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
        <CardDescription className="text-sm font-medium">
          Enter your credentials to sign in to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <LoginForm />
      </CardContent>
      <CardFooter className="flex flex-col gap-3 text-center">
        <CardDescription className="font-medium">
          Forgot password?{" "}
          <Link
            href="/forgot-password"
            className="text-foreground border-foreground border-b font-semibold"
          >
            Reset it
          </Link>
        </CardDescription>
        <CardDescription className="font-medium">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="text-foreground border-foreground border-b font-semibold"
          >
            Sign up
          </Link>{" "}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
