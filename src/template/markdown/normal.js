export default `/*自定义样式，实时生效*/

/*自定义样式，实时生效*/

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
  font-size:15px;
  line-height:1.75em;
  letter-spacing:0.1em;
  margin:28px 0;
  color:#333;
}

/* 一级标题 */
#nice h1 {
  padding:0;
  font-size:18px;
  margin:1.75em 0;
  line-height:1.75em;
  letter-spacing:1px;
  text-align:center;
  font-weight: bold;
}

/* 一级标题内容 */
#nice h1 span {
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:before {
  content:"";
  background-image:url(https://dev.tencent.com/u/views63/p/transfer/git/raw/master/20191023.png);
  background-repeat:no-repeat;
  width:60px;
  height:30px;
  background-size:60px 26.82px;
	float:left;
  margin-top:8px;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
  content:"";
  background-image:url(https://dev.tencent.com/u/views63/p/transfer/git/raw/master/20191023.png);
  background-repeat:no-repeat;
  width:60px;
  height:30px;
  background-size:60px 26.82px;
	float:right;
  margin-top:8px;
}

 /* 二级标题 */
#nice h2 {
  font-size:16px;
  margin: 28px 0;
	border-bottom: 2px solid rgb(227, 227, 227);
	background-color: rgb(255, 255, 255);
  height: 32px;
  color: rgb(62, 62, 62);
  counter-increment: count2;
}

/* 二级标题内容 */
#nice h2 span {
  font-size:16px;
  padding-left: 2px;
  color: rgb(0, 112, 192);
  border-bottom: 2px solid rgb(0, 112, 192);
  padding-bottom:5px;
  line-height: 2.2em;
  color: rgb(0, 112, 192);
  letter-spacing: 0.1em;
  font-weight: bold;
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:before {
  content: ""counter(count2)"";
  margin-right: 8px;
  padding: 4px 10px;
  border-bottom: 2px solid rgb(0, 112, 192);
  line-height: 28px;
  background-color: rgb(0, 112, 192);
  color: rgb(255, 255, 255);
  border-radius: 80% 100% 90% 20%;
  letter-spacing: 0.1em;
  float:left;
  font-weight: bold;
}

/* 三级标题 */
#nice h3 {
  font-size:15px;
  line-height:1.75em;
  letter-spacing:0.1em;
  margin:28px 0;
  font-weight: bold;
}

/* 三级标题内容 */
#nice h3 span {
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
  font-size:15px;
  line-height:1.75em;
  letter-spacing:0.1em;
  color:#333;
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice blockquote {
}

/* 引用文字 */
#nice blockquote p {
}

/* 链接
 * border-bottom: 1px solid #009688;
 */
#nice a {
}

/* 加粗 */
#nice strong {
  color: rgb(123, 12, 0);
}

#nice b {
  color: #407600;
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
}

/* 行内代码 */
#nice p code, li code {
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
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
  font-size:14px;
  line-height:1.75em;
  letter-spacing:0.1em;
  color:#333;
}

/* 脚注文字 */
#nice .footnote-word {
}

/* 脚注上标 */
#nice .footnote-ref {
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

#nice .block-equation {
  font-size: 15px;
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
