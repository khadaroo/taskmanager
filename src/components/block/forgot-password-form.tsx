import { Button } from "../ui/button";
import { Field, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";

export default function ForgotPasswordForm() {
  return (
    <form>
      <FieldSet>
        <Field>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input id="email" name="email" type="text" required />
        </Field>
        <Field>
          <Button size="lg">Send reset link</Button>
        </Field>
      </FieldSet>
    </form>
  );
}
