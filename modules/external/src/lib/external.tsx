import styled from '@emotion/styled';

const StyledExternal = styled.div`
  color: pink;
`;

export function External() {
  return (
    <StyledExternal>
      <h1>Welcome to External!</h1>
      <p>Awesome update</p>
      <p>update more...</p>
    </StyledExternal>
  );
}

export default External;
