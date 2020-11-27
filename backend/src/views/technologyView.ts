import Technology from '@models/technology';

export default {

  render(tech: Technology): Object {
    return {
      name: tech.name,
      color: tech.color
    };
  },

  renderMany(technologies: Technology[]): Object[] {
    return technologies.map(tech => this.render(tech));
  }
};
