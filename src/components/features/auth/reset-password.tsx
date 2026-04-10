import BackButton from "@/components/block/back-button";
import Logo from "@/components/block/logo";
import ResetPasswordForm from "@/components/block/reset-password-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "lucide-react";

export default function ResetPassword() {
  return (
    <Card className="flex w-full max-w-md flex-col gap-8 px-5 py-8 sm:px-8 sm:py-10">
      <BackButton href="/login">Back to Login</BackButton>
      <Logo />
      <CardHeader className="space-y-1 p-0">
        <CardTitle className="text-2xl font-bold">
          Reset Your Password
        </CardTitle>
        <CardDescription className="max-w-xs text-sm font-medium">
          Enter your new password below. Make sure it's strong and secure.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ResetPasswordForm />
      </CardContent>
      <CardFooter className="flex flex-col gap-3 text-center">
        <CardDescription className="font-medium">
          <Link href="/login" className="text-foreground font-semibold">
            Back to Login
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
