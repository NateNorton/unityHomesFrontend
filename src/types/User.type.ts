export interface UserType {
  id: number;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface UserUpdateType {
  UserName?: string;
  Email?: string;
  FirstName?: string;
  LastName?: string;
  PhoneNumber?: string;
}

export interface UserDetails {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
