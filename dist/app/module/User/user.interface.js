"use strict";
// /* eslint-disable no-unused-vars */
// import { Model } from "mongoose";
// import { USER_ROLE } from "./user.constant";
// export interface TUser {
//   id: string;
//   email: string;
//   password: string;
//   needsPasswordChange: boolean;
//   passwordChangedAt?: Date;
//   role: "superAdmin" | "admin" | "student" | "faculty";
//   status: "in-progress" | "blocked";
//   isDeleted: boolean;
// }
// export interface UserModel extends Model<TUser> {
//   //instance methods for checking if the user exist
//   isUserExistsByCustomId(id: string): Promise<TUser>;
// }
// export type TUserRole = keyof typeof USER_ROLE;
