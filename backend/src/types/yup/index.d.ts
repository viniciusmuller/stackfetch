import { StringSchema, ArraySchema } from 'yup';

declare module 'yup' {
  interface StringSchema<T extends string | null | undefined = string | undefined> {
    validGitHubUsername(message: string): StringSchema<T>;
    availableUsername(message: string): StringSchema<T>;
  }

  interface ArraySchema<T extends string | null | undefined = string | undefined> {
    minArray(n: number, message: string): ArraySchema<T>;
  }
}
