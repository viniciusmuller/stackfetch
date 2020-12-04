import Technology from '@models/technology';

export default {

  render(tech: Technology): Object {
    return {
      id: tech.id,
      name: tech.name,
      color: tech.color
    };
  },

  renderMany(technologies: Technology[]): Object[] {
    return technologies.map(tech => this.render(tech));
  }
};
