import {Then} from 'cucumber';
import { expectTitleToContains } from '../../support/seo';

Then(/^<h1> tag should contain "([^"]*)?"$/, expectTitleToContains);
