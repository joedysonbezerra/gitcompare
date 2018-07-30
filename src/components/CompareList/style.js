import styled from 'styled-components';


export const Container = styled.div`
  width:100%;
  max-width:1000px;
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content:center;
  margin-top: 3em;
`;

export const Repository = styled.div`
  width: 24%;
  background:#fff;
  border-radius:0.3em;
  margin: 0 0.3em;
  display:flex;
  flex-direction:column;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  header {
    padding:3.4375em;
    display:flex;
    flex-direction:column;
    align-items:center;
    img {
      width:64px;
    }
    strong {
      font-size:1.5em;
      margin-top:10px;
    }

    small {
      font-size: 0.875em;
      color:#667
    }
  }

  ul {
    list-style: none;

    li {
      font-weight:bold;
      font-size:1em;
      padding:0.75em 1.25rem;

      small {
      font-weight: normal;
      font-size:0.75em;
      color:#999;
      font-style:italic;
      }

      &:nth-child(2n-1) {
        background:#f5f5f5;
      }
    }
  }

`;
