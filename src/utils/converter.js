import juice from "juice";
import {message} from "antd";
import {
  BASIC_THEME_ID,
  CODE_THEME_ID,
  MARKDOWN_THEME_ID,
  LAYOUT_ID,
  BOX_ID,
  FONT_THEME_ID,
  MJX_DATA_FORMULA,
  COMMENT,
} from "./constant";

export const solveWeChatMath = () => {
  const layout = document.getElementById(LAYOUT_ID);
  const mjxs = layout.getElementsByTagName("mjx-container");
  for (let i = 0; i < mjxs.length; i++) {
    const mjx = mjxs[i];
    if (!mjx.hasAttribute("jax")) {
      break;
    }

    mjx.removeAttribute("jax");
    mjx.removeAttribute("role");
    mjx.removeAttribute("style");
    mjx.removeAttribute("tabindex");
    mjx.removeAttribute("ctxtmenu_counter");
    const svg = mjx.firstChild;
    const width = svg.getAttribute("width");
    const height = svg.getAttribute("height");
    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.style.width = width;
    svg.style.height = height;
  }
};

export const solveZhihuMath = () => {
  const layout = document.getElementById(LAYOUT_ID);
  const mjxs = layout.getElementsByTagName("mjx-container");
  while (mjxs.length > 0) {
    const mjx = mjxs[0];
    let data = mjx.getAttribute(MJX_DATA_FORMULA);
    if (!data) {
      continue;
    }

    if (mjx.hasAttribute("display") && data.indexOf("\\tag") === -1) {
      data += "\\\\";
    }

    mjx.outerHTML = '<img class="Formula-image" data-eeimg="true" src="" alt="' + data + '">';
  }
};

export const solveJuejinMath = () => {
  const layout = document.getElementById(LAYOUT_ID);
  const mjxs = layout.getElementsByTagName("mjx-container");
  while (mjxs.length > 0) {
    const mjx = mjxs[0];
    const data = mjx.getAttribute(MJX_DATA_FORMULA);
    if (!data) {
      continue;
    }

    // 行间公式
    if (mjx.hasAttribute("display")) {
      mjx.outerHTML = `<figure><img class="equation" src="https://juejin.im/equation?tex=${data}" alt=""/></figure>`;
    }
    // 行内公式
    else {
      mjx.outerHTML = `<span><img style="display:inline;" class="equation" src="https://juejin.im/equation?tex=${data}" alt=""/></span>`;
    }
  }
};

export const juejinSuffix = () => {
  const suffix = document.createElement("p");
  suffix.id = "nice-suffix-juejin-container";
  suffix.className = "nice-suffix-juejin-container";
  suffix.innerHTML = `本文使用 <a href="https://mdnice.com">mdnice</a> 排版`;

  const element = document.getElementById(LAYOUT_ID);
  element.appendChild(suffix);
};

export const solveHtml = () => {
  const element = document.getElementById(BOX_ID);

  // 代码注释换行问题
  const hljss = element.getElementsByClassName("hljs");
  for (const hljs of hljss) {
    hljs.innerHTML = hljs.innerHTML.replace(/\r\n/g, "<br>");
    hljs.innerHTML = hljs.innerHTML.replace(/\n/g, "<br>");
  }

  const inner = element.children[0].children;
  for (const item of inner) {
    item.setAttribute("data-tool", "mdnice编辑器");
  }
  let html = element.innerHTML;
  html = html.replace(/<mjx-assistive-mml.+?<\/mjx-assistive-mml>/g, "");
  html = html.replace(/<mjx-container (class="inline.+?)<\/mjx-container>/g, "<mjx $1</mjx>");
  html = html.replace(/\s<mjx class="inline/g, '&nbsp;<mjx class="inline');
  html = html.replace(/svg><\/mjx>\s/g, "svg></mjx>&nbsp;");
  html = html.replace(/class="mjx-solid"/g, 'fill="none" stroke-width="70"');
  const basicStyle = document.getElementById(BASIC_THEME_ID).innerText;
  const markdownStyle = document.getElementById(MARKDOWN_THEME_ID).innerText;
  const codeStyle = document.getElementById(CODE_THEME_ID).innerText;
  const fontStyle = document.getElementById(FONT_THEME_ID).innerText;
  let res = "";
  try {
    res = juice.inlineContent(html, basicStyle + markdownStyle + codeStyle + fontStyle, {
      inlinePseudoElements: true,
      preserveImportant: true,
    });
  } catch (e) {
    message.error("请检查 CSS 文件是否编写正确！");
  }

  // 代码注释换行预览显示问题
  const codeReg = /<pre([^>])*class="custom"([^>])*><code([^>])*style="([^"])*display: block;([^"])*"([^>])*>/g;
  const codeMatch = res.match(codeReg);
  if (codeMatch) {
    const convertTag = codeMatch[0].replace(/display: block;/g, "display: -webkit-box;");
    res = res.replace(codeReg, convertTag);
  }

  const counter = /"counter\((\S+?)\)"/g;
  const dict = {};

  let tmp = "";
  const list = res.split(/(counter-increment: \S+?;)/);
  for (let index = 0; index < list.length; index++) {
    let curr = list[index];
    const matched = curr.match(/counter-increment: (\S+?);/);
    if (matched) {
      const name = matched[1];
      let value = dict[name];
      value = value ? value + 1 : 1;
      dict[name] = value;
      continue;
    }

    curr = curr.replace(counter, (match, key) => {
      const value = dict[key];
      if (value) {
        return value;
      } else {
        return match;
      }
    });

    tmp += curr;
  }

  res = tmp;
  const commentReg = /\/\* comment\n([\s\S]+?)\n\*\//m;
  const comment = markdownStyle.match(commentReg);

  if (comment != null) {
    const ctxs = comment[1].split("\n");
    for (let idx = 0; idx < ctxs.length; idx++) {
      const kvs = ctxs[idx];
      const kv = kvs.split(",");
      const key = kv[0].trim();
      const value = kv[1].trim();
      const keyReg = new RegExp(key, "g");
      res = res.replace(keyReg, value);
    }
  }
  return res;
};

export const copySafari = (text) => {
  // 获取 input
  let input = document.getElementById("copy-input");
  if (!input) {
    // input 不能用 CSS 隐藏，必须在页面内存在。
    input = document.createElement("input");
    input.id = "copy-input";
    input.style.position = "absolute";
    input.style.left = "-1000px";
    input.style.zIndex = "-1000";
    document.body.appendChild(input);
  }
  // 让 input 选中一个字符，无所谓那个字符
  input.value = "NOTHING";
  input.setSelectionRange(0, 1);
  input.focus();

  // 复制触发
  document.addEventListener("copy", function copyCall(e) {
    e.preventDefault();
    e.clipboardData.setData("text/html", text);
    e.clipboardData.setData("text/plain", text);
    document.removeEventListener("copy", copyCall);
  });
  document.execCommand("copy");
};
