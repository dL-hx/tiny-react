import isFunctionCompoent from "./isFunctionCompoent"
import mountNativeElement from "./mountNativeElement"
import isFunction from "./isFunction"


export default function mountComponent(virtualDOM, container,oldDOM){
    let nextVirtualDOM =null

    let component = null 
    // 判断组件是类组件 还是函数组件
    if (isFunctionCompoent(virtualDOM)) {
        // 函数组件...
        nextVirtualDOM = buildFunctionComponent(virtualDOM)
        // console.log(nextVirtualDOM);
    }else{
         // 类组件
         nextVirtualDOM = buildClassComponent(virtualDOM)

         component = nextVirtualDOM.component
    }
    
  
    if (isFunction(nextVirtualDOM)) {
        mountComponent(nextVirtualDOM, container,oldDOM)
    }else{
        mountNativeElement(nextVirtualDOM, container,oldDOM)
    }


    if (component) {
        component.componentDidMount()

        if (component.props&&component.props.ref) {
            component.props.ref(component)
        }
        
    }
  
}

function buildFunctionComponent(virtualDOM) {
    
    return virtualDOM.type(virtualDOM.props || {} )
}


function buildClassComponent(virtualDOM) {
    
    // new 拿到类组件的实例对象
    // new 关键字, 实例化组件的构造函数,   拿到组件的实例对象
    const component = new virtualDOM.type(virtualDOM.props||{})
    
    // 拿到 nextVirtualDOM
    const nextVirtualDOM = component.render()

    nextVirtualDOM.component = component // 将实例对象进行挂载到nextVirtualDom上
    return nextVirtualDOM
}
