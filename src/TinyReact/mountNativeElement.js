import createDOMElement from "./createDOMElement";
import unmountNode from "./unmountNode";

// 渲染 Native Element 普通元素
export default function mountNativeElement(virtualDOM, container, oldDOM) {
  // 根据 virtualDOM 的 type 进行创建
  let newElement = createDOMElement(virtualDOM);

  // 将转换后的dom 对象渲染到页面中(虚拟dom--->真实dom的转换)
  if (oldDOM) {
    container.insertBefore(newElement, oldDOM);
  } else {
    container.appendChild(newElement);
  }

  // 判断旧的DOM对象是否存在, 如果存在  删除
  if (oldDOM) {
    unmountNode(oldDOM);
  }

  // 获取组件的实例对象
  let component = virtualDOM.component;
  if (component) {
    component.setDOM(newElement);
  }
}
