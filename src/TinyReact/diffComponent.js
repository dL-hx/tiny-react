import mountElement from "./mountElement";
import updateComponent from "./updateComponent";

// 比较组件
export default function diffComponent(virtualDOM, oldComponent, oldDOM, container){
    if (isSameComponent(virtualDOM, oldComponent)) {
        // 是同一个组件, 做组件更新操作
        console.log('同一个组件');
        updateComponent(virtualDOM, oldComponent, oldDOM, container)
    }else{
        // 不是同一个组件
        // console.log('不是同一个组件');
        mountElement(virtualDOM, container, oldDOM)
    }

}

// 判断virtualDOM, oldComponent,是否是同一个组件 
function isSameComponent(virtualDOM, oldComponent){
    return oldComponent&& virtualDOM.type === oldComponent.constructor
}