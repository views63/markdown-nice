export default `/* 全局属性
 * 页边距 padding:30px;
 * 全文字体 font-family:ptima-Regular;
 * 英文换行 word-break:break-all;
 */
#nice {
  font-family:PingFangSC-Light;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top:5px;
 * 下边距 margin-bottom:5px;
 * 行高 line-height:26px;
 * 词间距 word-spacing:3px;
 * 字间距 letter-spacing:3px;
 * 对齐 text-align:left;
 * 颜色 color:#3e3e3e;
 * 字体大小 font-size:16px;
 * 首行缩进 text-indent:2em;
 */
#nice p {
  margin:10px 10px;
  line-height:1.75;
  letter-spacing:0.2em;
  font-size:14px;
  word-spacing:0.1em;
}

/* 一级标题 */
#nice h1 {
  border-bottom:2px solid rgb(248,57,41);
  font-size:1.3em;
}

/* 一级标题内容 */
#nice h1 span {
  display:inline-block;
  font-weight:normal;
  background:rgb(248,57,41);
  color:#ffffff;
  padding:3px 10px 1px;
  border-top-right-radius:3px;
  border-top-left-radius:3px;
  margin-right:3px;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}
 
/* 二级标题 */
#nice h2 {
  text-align:left;
  margin:20px 10px 0px 0px;
}

/* 二级标题内容 */
#nice h2 span {
  font-family:STHeitiSC-Light;
  font-size:18px;
  font-weight:bolder;
  display:inline-block;
  padding-left:10px;
  border-left:5px solid rgb(248,57,41);
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
}

/* 三级标题内容 */
#nice h3 span {
  font-size:14px;
  color:rgb(165,213,93);
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
  font-size: 14px;
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
  font-size: 14px;
}

/* 列表内容，不要设置li
 */
#nice li section {
  font-size:13px;
}

/* 引用
 * 左边缘颜色 border-left-color:black;
 * 背景色 background:gray;
 */
#nice blockquote {
  font-style:normal;
  border-left:none;
  padding:10px;
  position:relative;
  line-height:1.8;
  border-radius:0px 0px 10px 10px;
  color:#FEEEED;
  background:#000;
  box-shadow:#84A1A8 0px 10px 15px;
}
#nice blockquote:before {
  content:" ";
  display:inline;
  color:#FFF;
  font-size:4em;
  font-family:Arial,serif;
  line-height:1em;
  font-weight:700;
}

/* 引用文字 */
#nice blockquote p {
  color:#FEEEED;
  font-size:13px;
  display:inline;
}
#nice blockquote:after {
  content:"”";
  float:right;
  display:inline;
  color:#FFF;
  font-size:3em;
  line-height:1em;
  font-weight:500;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  color:rgb(248,57,41);
  border-bottom: 1px solid #ff3502;
  font-family:STHeitiSC-Light;
}

/* 加粗 */
#nice strong {
  font-weight:border;
  color:rgb(248,57,41);
}

/* 斜体 */
#nice em {
  color:rgb(248,57,41);
  letter-spacing:0.3em;
}

/* 加粗斜体 */
#nice strong em {
  color:rgb(248,57,41);
  letter-spacing:0.3em;
}

/* 删除线 */
#nice del {
}
 
/* 分隔线
 * 粗细、样式和颜色
 * border-top:1px solid #3e3e3e;
 */
#nice hr {
  height:1px;
  padding:0;
  border:none;
  border-top:medium solidid #333;
  text-align:center;
  background-image:linear-gradient(to right,rgba(248,57,41,0),rgba(248,57,41,0.75),rgba(248,57,41,0));
}

/* 图片
 * 宽度 width:80%;
 * 居中 margin:0 auto;
 * 居左 margin:0 0;
 */
#nice img {
  border-radius:0px 0px 5px 5px;
  display:block;
  margin:20px auto;
  width:85%;
  height:100%;
  object-fit:contain;
  box-shadow:#84A1A8 0px 10px 15px;
}

/* 图片描述文字 */
#nice figcaption {
  display:block;
  font-size:12px;
  font-family:PingFangSC-Light;
}

/* 行内代码 */
#nice p code,li code {
  color:rgb(271,93,108);
}

/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
#nice pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  font-size: 14px;
}

/* 脚注文字 */
#nice .footnote-word {
  color:rgb(248,57,41);
}

/* 脚注上标 */
#nice .footnote-ref {
  color:rgb(248,57,41);
}

/*脚注链接样式*/
#nice .footnote-item em {
  color:#6E1E51;
  font-size:12px;
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
}

/* 参考资料编号 */
#nice .footnote-num {
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}`;
