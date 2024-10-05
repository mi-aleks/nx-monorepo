import styled from '@emotion/styled';

const StyledExternal = styled.div`
  color: pink;
`;

export function External() {
  return (
    <StyledExternal>
      <h1>Welcome to External!</h1>
      {/* cleanup */}
    </StyledExternal>
  );
}

export default External;
