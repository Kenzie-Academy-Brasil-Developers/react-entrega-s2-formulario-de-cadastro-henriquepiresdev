import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --color-primary:          #FF577F;
  --color-primary-Focus:    #FF427F;
  --Color-primary-Negative: #59323f;
  --Grey-50:                #868E96;
  --Grey-4:                 #121214;
  --Grey-3:                 #212529;
  --Grey-2:                 #343b41;
  --Grey-1:                 #868E96;
  --Grey-0:                 #F8F9FA;
  --Sucess:                 #3fe864;
  --Negative:               #e83f5b;

}
*{
  margin: 0;
  padding: 0;
  box-sizing:  border-box;
  font-family: 'Inter', sans-serif;
  cursor: default;
}
.app, body, html{
  background-color: var(--Grey-4);
  width: 100%;
  height:100%;
  overflow: hidden visible;
  ::-webkit-scrollbar{
    width: 5px;
  }
}
button{
  cursor: pointer;
}
a{
  text-decoration: none;
}
input{
  cursor: text;
}

`;

export default GlobalStyle;
