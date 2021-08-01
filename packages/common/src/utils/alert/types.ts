/**
 * @public
 */
export interface IMessage {
  emoji: string;
  text: string;
}

/**
 * @public
 */
export interface IFile {
  filetype: "pdf";
  content: Buffer;
  filename: string;
}

/**
 * @public
 */
export interface IAlertService extends IAlertClient {}

export interface IAlertServiceConstructorParams {
  client: IAlertClient;
}

/**
 * @public
 */
export interface IAlertClient {
  sendMessage(params: IAlertServiceSendMessageParams): Promise<void>;
  sendFile(params: IAlertServiceSendFileParams): Promise<void>;
}

/**
 * @public
 */
export interface IAlertServiceSendMessageParams {
  to: string;
  from: string;
  message: IMessage;
}

/**
 * @public
 */
export interface IAlertServiceSendFileParams {
  to: string;
  file: any;
  comment: string;
}
