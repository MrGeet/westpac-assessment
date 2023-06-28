import { Column, Typography } from '../globalStyles';
import { FormCard, FormWrapper, Input, Label } from './FormStyles';

/**
 *
 * TODO:
 * At least 8 characters
 * 1 number
 * 2 special characters
 * OR more than 15 characters with no restrictions
 */

export const Form = () => {
  return (
    <FormCard>
      <img src="assets/westpac.svg" alt="" />
      <FormWrapper>
        <Typography textAlign="center" as="h2" fontSize="28px" mt="2rem" mb="2rem">
          Reset Password
        </Typography>
        <Column>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" />
        </Column>

        <Column mt="1.2rem">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input type="password" id="confirmPassword" />
        </Column>

        <button type="submit">Reset</button>
      </FormWrapper>
    </FormCard>
  );
};
