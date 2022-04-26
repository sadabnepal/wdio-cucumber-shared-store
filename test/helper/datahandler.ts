import { getValue } from '@wdio/shared-store-service';

export const getValueFromSharedStore = async (key: string): Promise<string> => {
     const data = await getValue(key)
     return JSON.parse(JSON.stringify(data));
}