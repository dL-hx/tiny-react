import isFunction from "./isFunction"

export default function isFunctionCompoent(virtualDOM){
    // 判断组件是类组件 还是函数组件
    // 判断对象原型对象上没有render方法--->isFunctionCompoent
    const type = virtualDOM.type
    return (
        type && isFunction(virtualDOM)&&!(type.prototype&&type.prototype.render)
    )

}