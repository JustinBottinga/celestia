export interface ISignUp {
  Username: string;
  Email: string;
  Password: string;
  PasswordConfirm: string;
  DateOfBirth: Date;
}

export interface ISignIn {
  Username: string;
  Email: string;
  Password: string;
}

export interface IChat {
  chatId: string;
  messages: { message: string; sender: string }[];
  title: string;
}

export interface IMessage {
  message: string;
  sender: string;
}