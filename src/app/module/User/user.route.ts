// /* eslint-disable @typescript-eslint/no-explicit-any */
// import express, { NextFunction, Request, Response } from "express";
// import validateRequest from "../../middlewares/validateRequest";
// import { upload } from "../../utils/sendImageToCloudinary";
// import { UserControllers } from "./user.controller";
// import { UserValidation } from "./user.validation";

// const router = express.Router();

// router.post(
//   "/create-student",

//   upload.single("file"),
//   validateRequest(UserValidation.userValidationSchema),
//   UserControllers.createStudent
// );

// export const UserRoutes = router;
