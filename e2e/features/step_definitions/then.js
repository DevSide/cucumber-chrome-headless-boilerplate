import { defineSupportCode } from 'cucumber';
import title from '../../support/title';

defineSupportCode(({ Then }) => {
  Then(/^I expect the title to be "([^"]*)?"$/, title);
});
