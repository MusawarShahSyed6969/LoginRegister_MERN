import { Button, TextField  } from "@mui/material";
import styled from "styled-components";



export const FormResponseError = styled.p`
  color: ${(props) => (props.Error ? "red" : "green")};
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  font-weight: 500;
  font-size: 1.2rem;
`;

export const FromHeaderText = styled.h2`
  color: ${({ theme }) => theme.colors.main};
  font-weight: bold;
  font-size: 3rem;
  font-family: Open Sans, sans-serif;


  
`;

export const SubmitButtonDiv = styled.button`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;


`;

export const SubmitButton = styled(Button)`
:hover {
  color: success;
}
`;


// export const SubmitButton = styled(Button)`
// &:hover .btn{
//   background-color: red;
// }
// `;

