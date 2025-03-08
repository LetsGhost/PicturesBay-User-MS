export interface CreateUserDto {
  email: string;
  password: string;
  username: string;
  dob: Date;
  role: string;
  createdAt: Date;
}
