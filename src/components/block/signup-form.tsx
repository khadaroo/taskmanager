import React from "react";
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SignUpForm() {
  return (
    <form>
      <FieldSet className="flex gap-4">
        <FieldGroup className="@container/field-group flex flex-row gap-4">
          <Field>
            <FieldLabel htmlFor="firstName">First Name</FieldLabel>
            <Input id="firstName" name="firstName" type="text" required />
          </Field>

          <Field>
            <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
            <Input id="lastName" name="lastName" type="text" required />
          </Field>
        </FieldGroup>

        <Field>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input id="email" name="email" type="email" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" name="password" type="password" required />
        </Field>

        <Field>
          <Button size="lg">Create account</Button>
        </Field>
      </FieldSet>
    </form>
  );
}
