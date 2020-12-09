import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import User from '@models/user';
import gitHubApi from '@services/gitHubApi';

// Custom method for validating a minimum length for an array,
// since yup's min method doesn't work on arrays
Yup.addMethod<Yup.ArraySchema<any>>(Yup.array, 'minArray',
  function(min: number, message: string) {
    return this.test('min-array', message,
      function(value) {
        if (!value) return false;
        return value.length >= min;
    });
  }
);

// Requests a given username at GitHub API to check if it exists.
Yup.addMethod<Yup.StringSchema<string>>(Yup.string, 'validGitHubUsername',
  function(message: string) {
    return this.test('valid-github-username', message,
     function(value) {
      return new Promise((resolve, _) => {
        // Try to perform an GET request on GitHub API username,
        // if the request returns 404 (goes to catch),
        // the username is invalid.
        gitHubApi.get(`/users/${value}`)
          .then(_ => resolve(true))
          .catch(_ => resolve(false));
      });
    });
  }
);

// Method that checks if a GitHub username is already
// registered on the system database.
Yup.addMethod<Yup.StringSchema>(Yup.string, 'availableUsername',
  function(message: string) {
    return this.test('available-app-username', message,
      function(value) {
        return new Promise((resolve, _) => {
          getRepository(User)
            .createQueryBuilder('user')
            .where('user.github_username = :name', { name: value })
            .getCount()
            .then(result => resolve(result == 0))
        });
      }
    );
  }
);

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required.')
    .min(5, 'Name must contain at least 5 characters.')
    .max(30, 'Name must contain at most 30 characters.'),

  age: Yup.number()
    .typeError('Age must be a number.')
    .required('Age is required.')
    .integer('Age must be an integer.')
    .min(10, 'Minimum age is 10.')
    .max(120, 'Maximum age is 120.'),

  about: Yup.string()
    .required('About is required.')
    .min(20, 'About must contain at least 20 characters.')
    .max(200, 'About must contain at most 200 characters.'),

  gitHubUsername: Yup.string()
    .required('GitHub username is required.')
    .min(4, 'GitHub username must contain at least 4 characters.')
    .max(39, 'GitHub username must contain at most 39 characters.')
    .availableUsername('Username already registered.')
    .validGitHubUsername('Invalid GitHub username.'),

  stack: Yup.array()
    .typeError('Stack must be an array.')
    .required('Stack is required.')
    .of(Yup.number())
    .minArray(1, 'Stack must contain at least one technology.')
    .max(7, 'Stack must contain at most 7 technologies')
  }
);

export default userSchema;
