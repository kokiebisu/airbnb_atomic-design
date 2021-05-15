import { AddressInputTemplate, AddressInputTemplateProps } from './template';

export interface AddressInputProps extends AddressInputTemplateProps {}

export const AddressInput: React.FC<AddressInputProps> = ({ ...props }) => {
  return <AddressInputTemplate {...props} />;
};

export const address = (props) => {
  return {
    address: {
      component: <AddressInput {...props} />,
    },
  };
};
