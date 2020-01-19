import { ShopActionTypes } from '../action-types';

export default collectionsMap => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})