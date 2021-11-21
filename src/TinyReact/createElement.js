/**
 * 创建 Virtual DOM
 * @param {string} type 类型
 * @param {object | null} props 属性
 * @param  {createElement[]} children 子元素
 * @return {object} Virtual DOM
 */
// 通过 `...children` 将所有的子元素放置到 children 数组中。
export default function createElement(type, props, ...children) {
  // 处理 text文本节点
  const childElements = [].concat(...children).reduce((result,child) => {
    if (child !== false && child !== true && child !== null) {
      // 拷贝children属性
      if (child instanceof Object) {
        result.push(child)
      } else {
        result.push(createElement("text", { textContent: child }));
      }
    }

    return result // 返回处理好的 result 对象 
  }, []);

  return {
    type,
    props:Object.assign( {children: childElements}, props),// 合并对象
    children: childElements,
  };
}
