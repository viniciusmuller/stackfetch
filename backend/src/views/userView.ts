import User from '@models/user';
import TechnologyViewModel from './technologyView';

export default {

  render(user: User): Object {
    return {
      id: user.id,
      name: user.name,
      age: user.age,
      about: user.about,
      gitHubUsername: user.gitHubUsername,
      stack: TechnologyViewModel.renderMany(user.technologies)
    };
  },

  renderMany(users: User[]): Object[] {
    return users.map(user => this.render(user));
  }
};
