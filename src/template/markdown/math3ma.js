export default `/* 自定义样式，实时生效，浏览器实时缓存 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
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
  line-height:1.75em;
  letter-spacing:0.12em;
  font-size: 16px;
  word-spacing:0.1em;
  text-align: justify;
}

/* 一级标题 */
#nice h1 {
  padding:0;
  font-size:20px;
  margin:1.75em 0;
  line-height:2.0em;
  letter-spacing:1px;
  text-align:center;
  font-weight: bold;
  color:#555;
}

/* 一级标题内容 */
#nice h1 span {
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:before {
  content:"";
  background-image:url(https://dev.tencent.com/u/views63/p/transfer/git/raw/master/cda7224f29ee22e407483d4f110eb226.gif);
  background-size: 88px 25px;
  background-repeat:no-repeat;
  width:88px;
  height:25px;
	float:left;
  margin-top:8px;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
  content:"";
  background-image:url(https://dev.tencent.com/u/views63/p/transfer/git/raw/master/cda7224f29ee22e407483d4f110eb226.gif);
  background-size: 88px 25px;
  background-repeat:no-repeat;
  width:88px;
  height:25px;
	float:right;
  margin-top:8px;
}

/* 一级标题内容 */
#nice h1 span {
  color: #333;
  margin-left:7px;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}
 
/* 二级标题 */

/*二级标题伪元素*/
#nice h2:before{
  content: "";
}

/* 二级标题内容 */
#nice h2 span {
  background-color: #333;
  background-image:url(https://dev.tencent.com/u/views63/p/transfer/git/raw/master/d2ac7d5a23a8c9155cdc12024fe55286.png);
  background-size: 80px 80px;
  background-position: center top;
  background-repeat: no-repeat;
  text-align: center;
  display: block;
  height: 80px;
  line-height: 141px;
  width: 100%;
  color: #fefefe;
  margin-left: 0px;
  margin-top: 36px;
  margin-bottom: 0px;
  font-size: 17px;
  border-radius: 3px;
}

/* 三级标题 */
#nice h3:before{
  /*content:"💎";*/
  content:"";
  background-image:url(https://dev.tencent.com/u/views63/p/transfer/git/raw/master/4ae0d9cb1f2dce84e231e345ea95a0b6.svg);
  background-size:12px 12px;
  display: inline-block;
  width: 12px;
  height: 12px;
  line-height:30px;
  margin-bottom:0px;
}

#nice h3 {
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 10px;
}

/* 三级标题内容 */
#nice h3 span {
  font-size:16px;
  font-weight:bold;
  margin-left:6px;
  color: #555;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}
/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
  color: #3c70a6;
  list-style-type: circle;
}

/* 无序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
  line-height:1.75em;
  letter-spacing:0.12em;
  font-size: 16px;
  word-spacing:0.1em;
  text-align: justify;
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
  margin-top:32px;
  margin-bottom: 32px;
  background-image:linear-gradient(to right,#3c70a600,#3c70a600,#3c70a6ff,#3c70a600,#3c70a600);
}
/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
}

/* 行内代码 */
#nice p code, li code {
  color: rgb(239, 112, 96);
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
}

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
  -webkit-appearance: none;  
  -webkit-box-shadow: 0 3px 6px #aaaccc;
  -moz-box-shadow: 0 3px 6px #aaaccc;  
  box-shadow: 0 3px 6px #aaaccc;  
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
  -webkit-appearance: none;    
  -webkit-box-shadow: 0 3px 6px #aaaccc;
  -moz-box-shadow: 0 3px 6px #aaaccc;
  box-shadow: 0 3px 6px #aaaccc;  
}
#nice tbody {
  -webkit-appearance: none;    
  -webkit-box-shadow: 0 3px 6px #aaaccc;
  -moz-box-shadow: 0 3px 6px #aaaccc;  
  box-shadow: 0 3px 6px #aaaccc;  
}
#nice table tr th {
  font-size: 15px;
  font-weight: bold;
  border: 0px solid #efefef;
  border-top: 1px solid #efefef;
}
#nice table tr td {
  font-size: 15px;
  font-weight: normal;
  border: 1px solid #efefef;
}

/* 脚注文字 */
#nice .footnote-word {
  color: #3c70a6;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: #3c70a6;
}

/*脚注超链接样式*/
#nice .footnote-item em {
  color: #3c70a6;
  font-size:13px;
  font-style:normal;
  padding-bottom: 1px;
  border-bottom-color:1px dashed #3c70a6; 
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
  background-image: none;
  background-size: none;
  content: "参考文献";
  border-bottom:1px solid #3c70a6;
  color: #3c70a6;
  display: block;
  width: auto;
  height: 25px;
  font-size: 18px;
  margin-bottom:22px;
  margin-top:25px;
}

#nice .footnotes-sep {
  color: #3c70a6;
}

/* 参考资料编号 */
#nice .footnote-num {
  color:#3c70a6;
}

/* 参考资料文字 */
#nice .footnote-item p { 
  color:#3c70a6;
  font-style: bold;
}

/* 参考资料解释 */
#nice .footnote-item p em {
  font-size:14px;
  font-weight:normal;
  border-bottom:1px dashed #3c70a6;
}


/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
  color: #3c70a6; 
}

/* 行内公式*/
#nice .inline-equation svg {  
  color: #3c70a6;
}

#nice .block-equation {
  margin-top: 25px;
  margin-bottom: 25px;
  padding-top:6px;
  padding-bottom:6px;
  background-color:#fafafa;
  border-radius:3px;
}`;
