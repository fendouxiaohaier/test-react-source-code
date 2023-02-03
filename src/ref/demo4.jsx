import { forwardRef, useEffect } from 'react';

const Child = (props) => {
  const { grandRef } = props

  return (
    <>
      <p>Child</p>
      <div ref={grandRef}>要获取的目标元素</div>
    </>
  )
}

/**
 * @description 父组件
 *
 * 第一个泛型参数是 ref 的类型
 * 第二个泛型参数是 props 的类型
 */
const Father = forwardRef((props, ref) => {
  return (
    <div>
      <Child grandRef={ref} />
    </div>
  )
})

/** @description 爷组件 */
const GrandFather = () => {
  let grandChildDiv = null

  useEffect(() => {
    console.log(grandChildDiv)
  }, [])

  return (
    <div>
      <Father ref={(el) => (grandChildDiv = el)} />
    </div>
  )
}

// const Child = (props) => {
//   const { grandRef } = props;

//   return (
//     <>
//       <p>Child</p>
//       <div ref={grandRef}>要获取的目标元素</div>
//     </>
//   );
// };

// /**
//  * @description 父组件
//  *
//  * 第一个泛型参数是 ref 的类型
//  * 第二个泛型参数是 props 的类型
//  */
// const Father = (props) => {
//   return (
//     <div>
//       <Child grandRef={props.refProp} />
//     </div>
//   );
// };

// /** @description 爷组件 */
// const GrandFather = () => {
//   let grandChildDivRef = createRef();

//   useEffect(() => {
//     console.log(grandChildDivRef);
//   }, []);

//   return (
//     <div>
//       <Father refProp={grandChildDivRef} />
//     </div>
//   );
// };

export default GrandFather;
