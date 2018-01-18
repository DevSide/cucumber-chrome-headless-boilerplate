import { defineSupportCode } from 'cucumber';
import visit from '../../support/visit';

defineSupportCode(({ Given }) => {
  Given(/^I visit "([^"]*)?"$/, visit);
});