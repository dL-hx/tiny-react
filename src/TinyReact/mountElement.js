import isFunction from "./isFunction";
import mountNativeElement from "./mountNativeElement";
import mountComponent from "./mountComponent";

// 渲染真实DOM
export default function mountElement(virtualDOM, container, oldDOM) {
  // Component VS NativeElement
  if (isFunction(virtualDOM)) {
    // Component 组件
    // console.log('组件');
    mountComponent(virtualDOM, container, oldDOM)
    
  } else {
    // NativeElement 普通元素
    mountNativeElement(virtualDOM, container, oldDOM);
  }
}
