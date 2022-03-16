import { useReducer } from 'react';
import SubmitContext from './submit-context';

const defaultSubmissionState = {
  items: [],
  times: 0,
};

const SubmissionReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTimes =
      state.times + action.item.times;

    const existingSubmissionItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingSubmissionItem = state.items[existingSubmissionItemIndex];
    let updatedItems;

    if (existingSubmissionItem) {
      const updatedItem = {
        ...existingSubmissionItem,
        times: existingSubmissionItem.times + action.item.times,
      };
      updatedItems = [...state.items];
      updatedItems[existingSubmissionItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      times: updatedTimes,
    };
  }
  if (action.type === 'REMOVE') {
    const existingSubmissionItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingSubmissionItemIndex];
    const updatedTimes = state.times - existingItem.times;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, times: existingItem.times - 1 };
      updatedItems = [...state.items];
      updatedItems[existingSubmissionItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalTimes: updatedTimes
    };
  }

  return defaultSubmissionState;
};

const SubmissionProvider = (props) => {
  const [subState, dispatchSubAction] = useReducer(
    SubmissionReducer,
    defaultSubmissionState
  );

  const addItemToSubmissionHandler = (item) => {
    dispatchSubAction({ type: 'ADD', item: item });
  };

  const removeItemFromSubmissionHandler = (id) => {
    dispatchSubAction({ type: 'REMOVE', id: id });
  };

  const subContext = {
    items: subState.items,
    times: subState.times,
    addItem: addItemToSubmissionHandler,
    removeItem: removeItemFromSubmissionHandler,
  };

  return (
    <SubmitContext.Provider value={subContext}>
      {props.children}
    </SubmitContext.Provider>
  );
};

export default SubmissionProvider;