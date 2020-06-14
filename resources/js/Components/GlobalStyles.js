import { createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        width: 100%;
        height: 100%;
        padding-top: 50px;
        font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        font-size: 12px;
        color: #696969;
    }
`;

// padding-top: 55px;

// *: 모든 elementes
export default globalStyles;