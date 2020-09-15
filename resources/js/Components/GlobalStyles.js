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
        font-size: 12px;
        color: #696969;
        font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",Osaka, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", "맑은고딕", "malgun gothic",  "돋움", dotum, sans-serif;
    }
    `;
    // top:10%;
    // font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    
    // color:inherit; #ff5122
// padding-top: 55px;

// *: 모든 elementes
export default globalStyles;