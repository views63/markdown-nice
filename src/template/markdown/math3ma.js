export default `
/* comment
(（[^\\n]+?）),<span style="color:#aaaaaa;">$1</span>
*/

/* 自定义样式，实时生效，浏览器实时缓存 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
  font-size: 15px;
  color: #111;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  margin: 10px 0px;
  line-height:2.0em;
  letter-spacing:0.12em;
  font-size: 16px;
  word-spacing:0.1em;
  text-align: justify;
  margin-top:25px;
  margin-bottom:25px;
}

/* 一级标题 */
#nice h1 {
  background-color:#222;/*#222;*/
  background-image:url(https://imgkr.cn-bj.ufileos.com/d29bdb5f-0139-46ae-a1b3-33917805a3e1.png);
  background-size: 80px 72px;
  background-position: center top;
  background-repeat: no-repeat;
  padding-top:0px;
  font-size:20px;
  height: 82px;
  margin:1.75em 0;
  line-height:2.0em;
  letter-spacing:1px;
  text-align:center;
  font-weight: bold;
  color:#ffa;
  margin-top:36px;
  margin-bottom:58px;
  font-weight:normal;
  border-radius:3px;
}
 

#nice h1 span {
  text-align: center;
  display: block;
  height: 60px;
  line-height: 146px;
  width: 100%;
  color: #fff;/*#adf;*/
  margin-left: 0px;
  margin-top: 36px;
  padding-bottom: 0px;
  font-size: 15px;
  border-radius: 3px;
}

/* 二级标题 */
#nice h2 {
  display:block;
  text-align:center;
  background-image: url(https://imgkr.cn-bj.ufileos.com/3d09b42d-35b1-45a0-b968-439e36c8c071.gif); 
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 50px; /*28px for daydayup*//*100px for two pigs*/
  margin-top: 49px;
  margin-bottom: 50px;
  padding-top: 49px; /*88px for two pigs*/
  counter-increment: count2;
}

/*二级标题伪元素 ✩ⓂⒶⓉⒽ『』「」*/
#nice h2:before {
  content: ""counter(count2)"";
  text-align: left;
  font-size: 15px;
  font-weight: normal;
  color: #fff;/*#f36;*/
  text-shadow: 1px 0px 1px #bbb;
  margin-top: 0px;
  /*-webkit-text-stroke: 1px black;
  color:white;*/
}

/* 二级标题内容 */
#nice h2 span {
  text-align:center;
  display: block;
  height: 46px;
  line-height: 60px;
  color: #f36;/*#505;*//*#3c70a6;*/
  background-size: 16px;
  margin-top: 5px;
  font-size: 18px;
  margin-bottom: 30px;
  font-weight: bold;
  letter-spacing:0.125em;
  /*-webkit-text-stroke: 1px black;
  color:#505;*/
}

/* 三级标题 */

#nice h3:before {
  content: "";
  background-image:url(https://imgkr.cn-bj.ufileos.com/d71c5a57-5017-4821-8cb4-92495a1deff1.png);
  background-size:20px 20px;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height:20px;
  margin-bottom:-4px;
}

#nice h3 {
  border-bottom: 0px dashed #666;
}

/* 三级标题内容 */
#nice h3 span {
  font-size:15px;
  font-weight:bold;
  display:inline-block;
  margin-left:5px;
  color: #252;
  font-weight: bold;
  margin-top:32px;
  padding-bottom:-3px;
  height:23px;
  margin-bottom:10px;
  border-bottom: 1px dashed #000;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 一级标题 */
#nice h4 span {

}
/* 一级标题 */
#nice h4 {
  background-color:#fff;
  padding:10px;
  font-size:12px;
  height: 36px;
  margin:1.75em 0;
  line-height:1.0em;
  letter-spacing:1px;
  text-align:center;
  font-weight: bold;
  color:#000;
  margin-top:-66px;
  margin-bottom:58px;
  margin-left:58px;
  margin-right:58px;
  font-weight:normal;
  border-radius:6px;
  border:0.5px solid black;
  text-align: justify;
  padding-left:10px;
  padding-top:40px;
}
/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
  color: #555;
  list-style-type: circle;
  line-height:1.75em;
  font-size: 15px;
  letter-spacing:0.1em;  
  margin-bottom:20px;
}

/* 无序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}
/* 列表内容，不要设置li
 */

#nice li section {
  font-size: 15px;
  margin-bottom:10px;

}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice blockquote {
  padding: 8px 9px;
  line-height: 27px;
  background-color: rgb(249, 249, 249);
  border-left:none;
  display:block;
  border-radius: 3px;
  border: 1px dashed #ccc;
  border-top: 1px solid #eee;
  margin-top:32px;
  margin-bottom:32px;  
}

/* 引用文字 */
#nice blockquote p {
    font-size: 15px;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
}

/* 加粗 */
#nice strong {
  color:#114466;/*#c39f6a;*//*#3c70a6;*/
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice strong em {
}

/* 删除线 */
#nice del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#nice hr {
  height:1px;
  border:none;
  text-align:center;
  margin-top:39px;
  margin-bottom: 39px;
  background-image:linear-gradient(to right,#3c70a600,#3c70a600,#3c70a6ff,#3c70a600,#3c70a600);
}
/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
}

/* 图片描述文字 */
#nice figcaption {
  content:"⌂";
  caption-side:"⌂";
  display:block;
  padding-top: 8px;
  font-size:13px;
  font-family:PingFangSC-Light;
  color: #a55;
}

#nice figcaption:before {
  content:"△ ";
  font-size: 13px;
}
/* 行内代码 */
#nice p code, li code {
  font-size:15px;
  color: #000;/*rgb(239, 112, 96);*/
  font-weight:bold;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
  font-size: 13px;
  border-radius: 3px;
  color: #666;
  line-height: 1.25em;
  margin-bottom: 25px;
}
/*
#nice pre {
  margin-bottom: 55px;
} */

#nice pre code.hljs {
  padding: 5px 10px;
  margin-top: 16px;
  margin-bottom: 10px;
}

#nice .hljs-string,
#nice .hljs-doctag {
  color: #36c;
}
#nice .hljs-comment,
.hljs-quote {
  color: #587;
  font-size:13px;
  font-style: normal;
} 
#nice .hljs-number,
#nice .hljs-literal,
#nice .hljs-variable
{
  color: #36f;
}
#nice .hljs-template-variable {
  color: #9f3;
}
#nice .hljs-tag{
  color: #9f3;
}
#nice .hljs-attr {
  color: #9f3;
}

#nice .hljs-keyword,
#nice .hljs-selector-tag,
#nice .hljs-subst {
  color: #959;
  font-weight: normal;
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table {
  overflow: hidden;
  border: 0px solid #fff;
  border-radius: 6px;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border: 0px solid #fff;
  -webkit-border: 0px solid #fff;
  width: 100%;
  margin-top: 25px;
  margin-bottom： 25px;
}
#nice table tr:hover {
  background: #fbf8e9;
  transition: all 0.1s ease-in-out;
}
#nice table th {
  background-color: #e0e9f9;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#ebf3fc), to(#e0e9ff));
  background-image: linear-gradient(top, #ebf3fc, #dce9ff);
}
#nice thead {
  margin-top: 20px;  
}
#nice tbody {
}
#nice table tr th {
  font-size: 13px;
  font-weight: bold;
  border: 0px solid #efefef;
  border-top: 1px solid #efefef;
}
#nice table tr td {
  font-size: 13px;
  font-weight: normal;
  border: 1px solid #efefef;
}

/* 脚注文字 */
#nice .footnote-word {
  color: #114466;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: #114466;
}

/*脚注超链接样式*/
#nice .footnote-item em {
  color: #3c70a6;
  font-size:13px;
  font-style:normal;
  padding-bottom: 1px;
  border-bottom-color:1px dashed #333; 
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
  background-image: none;
  background-size: none;
  content: "参考文献";
  border-bottom:0px solid #dce8f6;
  color: ##114466;
  display: block;
  width: auto;
  height: 25px;
  font-size: 17px;
  margin-bottom:22px;
  margin-top:40px;
  letter-spacing:0.12em;
  font-weight: bold;
  text-align: left;
}

#nice .footnotes-sep {
  color: #114466;
  border-bottom:0px solid #999;
}

/* 参考资料编号 */
#nice .footnote-num {
  color:#114466;
  font-weight:bold;
}

/* 参考资料文字 */
#nice .footnote-item p { 
  color:#114466;
  font-weight: normal;
}

/* 参考资料解释 */
#nice .footnote-item p em {
  font-size:14px;
  font-weight:normal;
  color: ##114466;
  border-bottom:0px dashed #333;
}


/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
  color: #ffa;/*#3c70a6;*/ 
  font-family: Gyre Pagella;
  max-width: 300% !important;
  -webkit-overflow-scrolling: touch;
}

/* 行内公式
https://imgkr.cn-bj.ufileos.com/f9eb6590-3a87-46e5-8bc4-de66f803bc18.jpeg*/
#nice .inline-equation svg {  
  color: #000;/*#505;*//*#3c70a6;*/
}

#nice .span-inline-equation {
  font-size:15px;
}

#nice .span-block-equation {
  font-size:15px;
}

#nice .block-equation {
  background-image:url(https://imgkr.cn-bj.ufileos.com/dc7c3c39-6de6-44ce-871e-6e780e8b98a4.jpeg);  
  margin-top: 25px;
  margin-bottom: 25px;
  padding-top:12px;
  padding-left:6px;
  padding-right:6px;
  padding-bottom:12px;
  background-color:#fafafa;
  border-radius:3px;
  font-family: Gyre Pagella;
  border-top: 0px dashed #ddd;
  text-align: center;
  overflow-x: auto;
}`;
