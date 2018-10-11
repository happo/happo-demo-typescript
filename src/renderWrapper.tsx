import * as React from 'react';

export default (component: React.ReactNode) => (
  <div style={{ border: '1px solid red', padding: 10 }}>{component}</div>
);
