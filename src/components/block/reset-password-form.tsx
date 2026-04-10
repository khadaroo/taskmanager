import { Button } from "../ui/button";
import { Field, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";

export default function ResetPasswordForm() {
  return (
    <form>
      <FieldSet>
        <Field>
          <FieldLabel htmlFor="password">New Password</FieldLabel>
          <Input id="password" name="password" type="password" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Confirm Password</FieldLabel>
          <Input id="password" name="password" type="password" required />
        </Field>
        <Field>
          <Button size="lg">Reset password</Button>
        </Field>
      </FieldSet>
    </form>
  );
}
