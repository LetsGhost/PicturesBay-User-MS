import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import ncrypt from 'ncrypt-js';
import { config } from 'dotenv';
config();

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  dob: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<UserDocument>('save', async function (next) {
  if (this.isModified('password')) {
    const ncryptInstance = new ncrypt(process.env.SECRET_KEY);
    this.password = await ncryptInstance.encrypt(this.password);
  }
  next();
});
