import * as actionTypes  from '../common/actionTypes';

export function getCategories(payload) {
  return {
    type: actionTypes.CATEGORY_LIST,
    payload
  };
}

  