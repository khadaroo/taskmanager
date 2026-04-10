import BackButton from "@/components/block/back-button";
import Logo from "@/components/block/logo";
import SignUpForm from "@/components/block/signup-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Signup() {
  return (
    <Card className="flex w-full max-w-md flex-col gap-8 px-5 py-8 sm:px-8 sm:py-10">
      <BackButton href="/">Back to home</BackButton>
      <Logo />
      <CardHeader className="p-0">
        <CardTitle className="text-2xl font-bold">
          Create your Account
        </CardTitle>
        <CardDescription className="text-sm font-medium">
          Join Task manager and start shipping faster
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <SignUpForm />
      </CardContent>
      <CardFooter className="flex flex-col gap-3 text-center">
        <CardDescription className="font-medium">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-foreground border-foreground border-b font-semibold"
          >
            Login
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
