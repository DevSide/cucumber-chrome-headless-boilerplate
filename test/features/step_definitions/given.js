import { Given } from 'cucumber';
import { visit } from '../../support/navigation';

Given(/^I visit "([^"]*)?"$/, visit);
