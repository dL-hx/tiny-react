import diff from "./diff";

// 转换 virtualDOM 对象为真实dom ,  渲染到页面元素上

export default function render(
  virtualDOM,
  container,
  oldDOM = container.firstChild
) {
  // 转换真实dom
  // 直接转换 dom
  diff(virtualDOM, container, oldDOM);
}
