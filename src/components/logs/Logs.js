import React, { useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();

    // eslint-disable-next-line
  }, []);

  if (loading || !logs) {
    console.log(loading);
    return <Preloader />;
  }

  return (
    <div>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className='center'>No logs to show...</p>
        ) : (
          logs.map(log => <LogItem key={log.id} log={log} />)
        )}
      </ul>
    </div>
  );
};

Logs.prototype = {
  logs: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

//Key = prop name, value = name from root reducer [this is to bring state from the reducer]
const mapStateToProps = state => ({
  log: state.log, //Bring in the whole state, then it is passed as props to the component
});

//@param function to bring state, @param actions that will be triggered (these are then passed as props)
export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
