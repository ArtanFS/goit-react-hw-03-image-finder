import styled from 'styled-components';

export const Images = styled('ul')(() => {
  return {
    display: 'grid',
    maxWidth: 'calc(100vw - 48px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gridGap: '16px',
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  };
});
