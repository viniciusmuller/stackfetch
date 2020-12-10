import * as Yup from "yup";

// This is frontend validation, if the form passes this validation,
// the backend will also check other internal things, e.g if the user is
// already registered on the system.
const userSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required.")
    .min(7, "Name must contain at least 7 characters.")
    .max(30, "Name must contain at most 30 characters."),

  age: Yup.number()
    .typeError("Age must be a number.")
    .required("Age is required.")
    .integer("Age must be an integer.")
    .min(10, "Minimum age is 10.")
    .max(120, "Maximum age is 120."),

  about: Yup.string()
    .required("About is required.")
    .min(20, "About must contain at least 20 characters.")
    .max(300, "About must contain at most 300 characters."),

  gitHubUsername: Yup.string()
    .required("GitHub username is required.")
    .min(4, "GitHub username must contain at least 4 characters.")
    .max(39, "GitHub username must contain at most 39 characters."),

  stack: Yup.array()
    .typeError("Stack must be an array.")
    .required("Stack is required.")
    .test(
      "min-array",
      "Stack must contain at least one technology.",
      (value) => value!.length >= 1
    )
    .max(7, "Stack must contain at most 7 technologies"),
});

export default userSchema;
