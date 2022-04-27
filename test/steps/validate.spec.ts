import { SharedKeys } from '@Common/SharedKeys';
import { getValueFromSharedStore } from '@Helper/datastore';
import { Then } from '@wdio/cucumber-framework';


Then(/^I validate value fetched is (.+)$/, async (username: string) => {
    expect(username).toEqual(await getValueFromSharedStore(SharedKeys.username))
})