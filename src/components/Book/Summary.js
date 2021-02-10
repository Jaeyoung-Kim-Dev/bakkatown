import React from 'react';
import { FormContent, FormH1 } from './BookElements';

const Summary = (props) => {
  return (
    <div style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.12)' }}>
      <FormContent>
        <FormH1>SUMMARY</FormH1>
      </FormContent>
    </div>
  );
};

export default Summary;
