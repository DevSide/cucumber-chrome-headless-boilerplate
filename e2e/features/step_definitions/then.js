import {Then} from 'cucumber';
import title from '../../support/title';

Then(/^I expect the title to be "([^"]*)?"$/, title);
