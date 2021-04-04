import { AuthPrototype } from '@prototype/auth/prototype.auth';
import { LoginPrototype } from '@prototype/auth/prototype.login';
import { SignupPrototype } from '@prototype/auth/prototype.signup';
import { ForgotPasswordPrototype } from '@prototype/auth/prototype.forgot';
import { ExistsPrototype } from '@prototype/auth/prototype.exists';

export const $Prototype = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  AUTH: 'auth',
  FORGOTPASSWORD: 'forgotpassword',
  EXISTS: 'exists',
};

export interface PrototypeProps {
  variant?: string;
  place?: string;
  stayType?: string | string[];
  characteristics?: string;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  variant = $Prototype.LOGIN,
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
    login: <LoginPrototype {...props} />,
    signup: <SignupPrototype {...props} />,
    auth: <AuthPrototype {...props} />,
    forgotpassword: <ForgotPasswordPrototype {...props} />,
    exists: <ExistsPrototype {...props} />,
  };
  return (
    <div data-testid={`${variant}-auth-prototype`}>{variants[variant]}</div>
  );
};
