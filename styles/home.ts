import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .profile {
      border-radius: 50%;
    }

    button {
      padding: 10px;
    }
  }
`;
