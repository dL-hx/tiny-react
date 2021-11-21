import diff from "./diff";

export default class Component {
  constructor(props) {
    this.props = props;
  }

  setState(state) {
    // this ,代表子类对象
    this.state = Object.assign({}, this.state, state);
    let virtualDOM = this.render(); // 获取最新的要渲染的  virtualDOM 对象

    // 获取旧的 virtualDOM 对象进行比对
    let oldDOM = this.getDOM();
    // console.log(oldDOM);
    // 获取容器
    let container = oldDOM.parentNode;

    // 比较对比
    diff(virtualDOM, container, oldDOM);
  }

  setDOM(dom) {
    this._dom = dom;
  }

  getDOM() {
    return this._dom;
  }

  // 更新组件的props
  updateProps(props) {
    this.props = props;
  }


  // 为Component父类 添加生命周期函数
  componentWillMount(){

  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){

  }

  shouldComponentUpdate(nextProps, nextState){
    return nextProps !=this.props || nextState!=this.state
  }


  componentWillUpdate(nextProps, nextState){

  }


  componentDidUpdate(prevProps, prevState){

  }


  componentWillUnmount(){

  }


}
