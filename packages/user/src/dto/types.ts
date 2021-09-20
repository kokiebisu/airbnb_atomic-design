export interface IDataTransferObjectProps {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IDataTransferObject extends IDataTransferObjectProps {
  id: string;
}
