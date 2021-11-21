import TinyReact from './TinyReact'

const root =  document.getElementById('root')

// demo1
// const virtualDOM = (
//     <div className="container">
//       <h1>你好 Tiny React</h1>
//       <h2 data-test="test">(编码必杀技)</h2>
//       <div>
//         嵌套1 <div>嵌套 1.1</div>
//       </div>
//       <h3 style={{background:'red'}}>(观察: 这个将会被改变)</h3>
//       {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
//       {2 == 2 && <div>2</div>}
//       <span>这是一段内容</span>
//       <button onClick={() => alert("你好")}>点击我</button>
//       <h3>这个将会被删除</h3>
//       2, 3
//       <input type="text" value="123"/> 
//     </div>
//   )

// //   console.log(virtualDOM)

//   // 转换 virtualDOM 对象为真实dom ,  渲染到页面元素上
// //   TinyReact.render(virtualDOM, root)


// demo2
// function Demo() {
//     return <h1>Hello</h1>
// }


function Heart(props) {
    // return <div>&hearts;</div>
    // return <Demo />
     return <div>
         {props.title}
         &hearts;
         {/* <Demo /> */}
     </div>

}

// class Alert extends TinyReact.Component {
//   constructor(props){ // 继承父类的 constructor 方法
//     super(props)
//   }
//   render(){
//     return <div>
//       {this.props.name}
//       {this.props.age}
//       </div>
//   }
// }
// // TinyReact.render(<Heart title="Hello React"/>, root)
// TinyReact.render(<Alert name="张三" age={20}/>, root)

// demo3:虚拟dom的比较
// const virtualDOM = (
//     <div className="container">
//       <h1>你好 Tiny React</h1>
//       <h2 data-test="test">(编码必杀技)</h2>
//       <div>
//         嵌套1 <div>嵌套 1.1</div>
//       </div>
//       <h3 style={{background:'red'}}>(观察: 这个将会被改变)</h3>
//       {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
//       {2 == 2 && <div>2</div>}
//       <span>这是一段内容</span>
//       <button onClick={() => alert("你好")}>点击我</button>
//       <h3>这个将会被删除</h3>
//       2, 3
//       <input type="text" value="123"/> 
//     </div>
//   )

//   TinyReact.render(virtualDOM, root)

//   const modifyDom = (
//     <div className="container">
//       <h1>你好 Tiny React</h1>
//       <h2 data-test="test123">(编码必杀技)</h2>
//       <div>
//         嵌套1 <div>嵌套 1.1</div>
//       </div>
//       <h3 style={{background:'red'}}>(观察: 这个将会被改变)</h3>
//       {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
//       {2 == 2 && <div>2</div>}
//       {/* <span>这是一段被修改的内容</span> */}
//       <button onClick={() => alert("你好!!!!")}>点击我</button>
//       {/* <h6>这个将会被删除</h6> */}
//       {/* 2, 3 */}
//       <input type="text" value="123"/> 
//     </div>
//   )

// setTimeout(()=>{
//   TinyReact.render(modifyDom, root)
// },3000)


// demo4 setState方法实现

class Alert extends TinyReact.Component {
  constructor(props){ // 继承父类的 constructor 方法
    super(props)
    this.state = {
      title:'Default Title'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      title:'Changed Title'
    })
  }
  render(){
    console.log(this.state);
    
    return <div>
      {this.props.name}
      {this.props.age}

      {this.state.title}

      <button onClick={this.handleClick}>改变Title</button>
      </div>
  }
}
// // TinyReact.render(<Heart title="Hello React"/>, root)
// TinyReact.render(<Alert name="张三" age={20}/>, root)



// demo 5 组件更新不是 同一个组件情况
// class Alert extends TinyReact.Component {
//   constructor(props){ // 继承父类的 constructor 方法
//     super(props)
//     this.state = {
//       title:'Default Title'
//     }

//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(){
//     this.setState({
//       title:'Changed Title'
//     })
//   }


//   componentWillReceiveProps(nextProps){
//    console.log('componentWillReceiveProps');
   
//   }


//   componentWillUpdate(nextProps, nextState){
//     console.log('componentWillUpdate');

//   }


//   componentDidUpdate(prevProps, prevState){
//     console.log('componentDidUpdate');

//   }



//   render(){
//     console.log(this.state);
    
//     return <div>
//       {this.props.name}
//       {this.props.age}

//       {this.state.title}

//       <button onClick={this.handleClick}>改变Title</button>
//       </div>
//   }
// }
// // TinyReact.render(<Heart title="Hello React"/>, root)
// TinyReact.render(<Alert name="张三" age={20}/>, root)


// setTimeout(()=>{
//   TinyReact.render(<Alert name="李四" age={50}/>, root)
//   // TinyReact.render(<Heart title="Hello React"/>, root)
// },3000)


// demo 6 实现ref 属性  获取元素DOM对象获取组件实例对象
class DemoRef extends TinyReact.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }


  componentDidMount(){
   console.log('componentDidMount');
  }

  handleClick(){
    console.log(this.input.value);
    console.log(this.alert);
  }


  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  render(){
    return(
      <div>
        <input type="text" ref={input=>(this.input=input)}/>
        <button onClick={this.handleClick}>按钮</button>

{/* 为组件添加ref 属性 */}
        <Alert ref={alert=>(this.alert=alert)} name="张三" age={20}/>
      </div>
    )
  }
}


// TinyReact.render(<DemoRef />, root)


// demo7 使用key属性进行节点对比


class KeyRef extends TinyReact.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)

    this.state={
      persons:[
        {id:1, name:'张三'},
        {id:2, name:'李四'},
        {id:3, name:'王五'},
        {id:4, name:'赵六'},
      ]
    }
  }



  handleClick(){
   // 点击按钮,调换元素位置
   const newState = JSON.parse(JSON.stringify(this.state))
  //  newState.persons.push(newState.persons.shift())
  //  newState.persons.splice(1,0, {id:100, name:'李逵'})// 在索引为1 的位置后面新增一个元素,  张三后面增加李逵
   newState.persons.pop()

   this.setState(newState)
  }




  render(){
    return(
      <div>
       <ul>
         {this.state.persons.map((person)=>(
           <li key={person.id}>
             {person.name}
             <DemoRef/>
           </li>

         ))}
       </ul>
        <button onClick={this.handleClick}>按钮</button>
         

      </div>
    )
  }
}


TinyReact.render(<KeyRef />, root)