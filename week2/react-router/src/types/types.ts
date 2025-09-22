export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Response {
  success: boolean;
  message: string;
  data: User[];
}
