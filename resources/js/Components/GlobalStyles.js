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
        font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        font-size: 12px;
        color: black;
        padding-top: 55px;
    }
`;

// *: 모든 elementes
export default globalStyles;