import diff from "./diff";

// 更新同一个组件props
export default function updateComponent(
  virtualDOM,
  oldComponent,
  oldDOM,
  container
) {
  // 当组件props变化时候, 调用生命周期函数自动更新
  oldComponent.componentWillReceiveProps(virtualDOM.props);
  // 判断生命周期是否需要更新

  if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
      // 未更新前的props
      let prevProps =  oldComponent.props

     oldComponent.componentWillUpdate(virtualDOM.props);
    // 组件更新
    oldComponent.updateProps(virtualDOM.props);

    // 获取组件返回的最新的 virtualDOM
    let nextVirtualDOM = oldComponent.render();

    // 更新 component 组件实例对象
    nextVirtualDOM.component = oldComponent;

    // 比对
    diff(nextVirtualDOM, container, oldDOM);

    oldComponent.componentDidUpdate(prevProps);

  }
}
