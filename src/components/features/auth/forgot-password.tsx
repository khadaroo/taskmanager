import BackButton from "@/components/block/back-button";
import ForgotPasswordForm from "@/components/block/forgot-password-form";
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

export default function ForgotPassword() {
  return (
    <Card className="flex w-full max-w-md flex-col gap-8 px-5 py-8 sm:px-8 sm:py-10">
      <BackButton href="/login">Back to Login</BackButton>
      <Logo />
      <CardHeader className="space-y-1 p-0">
        <CardTitle className="text-2xl font-bold">
          Forgot your password?
        </CardTitle>
        <CardDescription className="max-w-xs text-sm font-medium">
          Enter your email address below and we'll send you a link to reset your
          password.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ForgotPasswordForm />
      </CardContent>
    </Card>
  );
}
