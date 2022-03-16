import { useContext } from 'react';

import Modal from '../UI/Modal';
import SubmissionItem from './SubmissionItem';
import classes from './Submission.module.css';
import SubmissionContext from '../store/submit-context';

const Submission = (props) => {
  const subCtx = useContext(SubmissionContext);

  const times = `$${subCtx.times.toFixed(2)}`;
  const hasItems = subCtx.items.length > 0;

  const SubmissionRemoveHandler = (id) => {
    subCtx.removeItem(id);
  };

  const SubmissionAddHandler = (item) => {
    subCtx.addItem({...item, times: 1});
  };

  const SubmissionItems = (
    <ul className={classes['cart-items']}>
      {subCtx.items.map((item) => (
        <SubmissionItem
          key={item.id}
          name={item.name}
          times={item.times}
          onRemove={SubmissionRemoveHandler.bind(null, item.id)}
          onAdd={SubmissionAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {SubmissionItems}
      <div className={classes.total}>
        <span>Total times</span>
        <span>{times}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Confirm</button>}
      </div>
    </Modal>
  );
};

export default Submission;