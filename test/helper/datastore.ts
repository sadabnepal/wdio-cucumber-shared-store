import { SharedKeys } from '@Common/SharedKeys';
import { getValue, setValue } from '@wdio/shared-store-service';

export const getValueFromSharedStore = async (key: SharedKeys): Promise<string> => {
     const data = await getValue(key)
     return JSON.parse(JSON.stringify(data));
}

export const setValueToSharedStore = (key: SharedKeys, value: string | number) => {
     setValue(key, value)
}