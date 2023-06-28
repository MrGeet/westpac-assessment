import React, { useEffect, useState } from 'react';
import { FormCard, FormValidationWrapper, FormWrapper, Input, Label } from './FormStyles';
import { hasNumber, hasTwoSpecialCharacters } from '../helpers/passwordHelper';
import { IoCheckmarkSharp, IoClose } from 'react-icons/io5';
import { Column, Typography } from '../globalStyles';
/**
 *
 * TODO:
 * At least 8 characters
 * 1 number
 * 2 special characters
 * OR more than 15 characters with no restrictions
 */
type ValidationType = 'default' | 'incorrect' | 'correct';

interface IValidation {
  name: string;
  valid: ValidationType;
}
interface IPasswordValidation {
  minChar: IValidation;
  numberChar: IValidation;
  specialChar: IValidation;
  overChar: IValidation;
}
const initialValidation: IPasswordValidation = {
  minChar: { name: 'At least 8 characters', valid: 'default' },
  numberChar: { name: 'At least 1 numeric value', valid: 'default' },
  specialChar: { name: 'At least 2 special characters', valid: 'default' },
  overChar: { name: 'OR More than 15 characters long', valid: 'default' },
};
export const Form = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState<IPasswordValidation>(initialValidation);
  const [confirmValidation, setConfirmValidation] = useState<ValidationType>('default');

  useEffect(() => {
    if (password === '') {
      setPasswordValidation(initialValidation);
      return;
    }
    const newValidation: IPasswordValidation = JSON.parse(JSON.stringify(initialValidation));

    if (password.length > 15) {
      newValidation.overChar.valid = 'correct';
      setPasswordValidation(newValidation);
      return;
    }

    newValidation.minChar.valid = password.length >= 8 ? 'correct' : 'incorrect';
    newValidation.numberChar.valid = hasNumber(password) ? 'correct' : 'incorrect';
    newValidation.specialChar.valid = hasTwoSpecialCharacters(password) ? 'correct' : 'incorrect';

    setPasswordValidation(newValidation);
  }, [password]);
  useEffect(() => {
    if (confirmPassword === '') return setConfirmValidation('default');
    if (confirmPassword === password) return setConfirmValidation('correct');
    setConfirmValidation('incorrect');
  }, [confirmPassword, password]);

  return (
    <FormCard>
      <img src="assets/westpac.svg" alt="" />
      <FormWrapper>
        <Typography textAlign="center" as="h2" fontSize="28px" mt="2rem" mb="2rem">
          Reset Password
        </Typography>
        <Column>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <FormValidationWrapper className={password.length > 0 ? 'active' : ''}>
            {Object.values(passwordValidation).map(({ valid, name }, index) => (
              <div className={`${valid}`} key={index}>
                {valid === 'correct' && <IoCheckmarkSharp size={14} aria-label="correct" />}
                {valid === 'incorrect' && <IoClose size={14} aria-label="incorrect" />}
                {name}
              </div>
            ))}
          </FormValidationWrapper>
        </Column>

        <Column mt="1.2rem">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
          />
          <FormValidationWrapper className={confirmPassword.length > 0 ? 'active' : ''}>
            <div className={confirmValidation}>
              {confirmValidation === 'correct' && <IoCheckmarkSharp size={14} />}
              {confirmValidation === 'incorrect' && <IoClose size={14} />}
              Passwords should match
            </div>
          </FormValidationWrapper>
        </Column>

        <button type="submit">Reset</button>
      </FormWrapper>
    </FormCard>
  );
};
