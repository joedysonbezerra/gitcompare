import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  flex-wrap:wrap;
  justify-content:center;
  align-items: center;
  padding-top:3rem;
`;

export const Form = styled.form`
  margin-top: 2rem;
  width:100%;
  max-width:400px;
  display:flex;

  input{
    flex: 1;
    height:55px;
    padding: 0 20px;
    background:#fff;
    border:0;
    font-size:1rem;
    color:#444;
    border-radius:0.2rem;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  button{
    height: 55px;
    padding: 0 20px;
    margin-left:0.80rem;
    background:#01CE6A;
    border:0;
    font-size:1rem;
    font-weight:bold;
    color:#fff;
    border-radius:0.2rem;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  button:hover{
    background:#01B45D;
    box-shadow:none;
  }
`;
