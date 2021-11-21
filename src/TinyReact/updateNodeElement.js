// 下划线转换驼峰
function toHump(name) {
  return name.replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}
// 驼峰转换下划线
function toLine(name) {
  return name.replace(/([A-Z])/g, "-$1").toLowerCase();
}

// 为元素节点添加属性
export default function updateNodeElement(
  newElement,
  virtualDOM,
  oldVirtualDOM={} 
) {
  // 获取节点对应的属性对象
  const newProps = virtualDOM.props || {};

  // 获取旧的节点属性对象
  const oldProps = oldVirtualDOM.props || {};

  Object.keys(newProps).forEach((propName) => {
    // 获取属性值
    const newPropsValue = newProps[propName];

    const oldPropsValue = oldProps[propName];

    if (newPropsValue !== oldPropsValue) {
      // 判断属性名称是否为事件属性 onClick --> click
      if (propName.slice(0, 2) === "on") {
        // 事件名称
        const eventName = propName.toLowerCase().slice(2); // 截取出click

        // 为元素添加事件

        newElement.addEventListener(eventName, newPropsValue);

        if (oldPropsValue) {
          // 删除原有事件的事件处理函数
          newElement.removeEventListener(eventName, oldPropsValue);
        }
      } else if (propName === "value" || propName === "checked") {
        newElement[propName] = newPropsValue;
      } else if (propName !== "children") {
        if (propName === "style") {
          // 转换style样式
          console.log("newPropsValue", newPropsValue);
          let stylesStr = "";
          Object.keys(newPropsValue).forEach((styleName) => {
            const newStyleValue = newPropsValue[styleName];
            stylesStr += toLine(styleName) + ":" + newStyleValue + ";";
          });
          newElement.setAttribute("style", stylesStr);
        } else if (propName === "className") {
          newElement.setAttribute("class", newPropsValue);
        } else {
          // 是普通属性
          newElement.setAttribute(propName, newPropsValue);
        }
      }
    }
  });

  // 判断属性被删除的情况
  Object.keys(oldProps).forEach((propName) => {
    // 获取属性值
    const newPropsValue = newProps[propName];
    const oldPropsValue = oldProps[propName];

    if (!newPropsValue) {
      // 属性被删除了
      if (propName.slice(0,2)==='on') {// 移除事件
        const eventName = propsName.toLowerCase().slice(2)

        newElement.removeEventListener(eventName, oldPropsValue);

      }else if(propsName !== 'children'){// 移除属性
        newElement.removeAttribute(propsName)
      }
    }

  });




}
