import visit from '../../support/visit';

export default function () {
  this.Given(/^I visit "([^"]*)?"$/, visit);
}