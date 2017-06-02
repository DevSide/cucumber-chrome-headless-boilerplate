import title from '../../support/title';

export default function () {
  this.Given(/^I expect the title to be "([^"]*)?"$/, title);
}