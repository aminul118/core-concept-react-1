// export default function Todo({task, isDone}){
//     return (
//         <li>Task : {task}</li>
//     )
// }

// ! Conditional Rendering Option 1

/*
export default function Todo({task, isDone}){
    if(isDone === true){
        return <li>Finished : {task}</li>
    }
    else{
        return <li>work on : {task}</li>
    }
}
*/

// ! Conditional Rendering Option 2

/*
export default function Todo({task, isDone}){
    if(isDone){
        return <li>Finished : {task}</li>
    }
     return <li>work on : {task}</li>
}
     */

// ! Conditional Rendering Option 3 (Ternary operator)
/*
export default function Todo({task, isDone}){
    return (
        <li>{isDone ? 'Finished' : 'Work on'}: {task}</li>
    )
}
    */

// ! Conditional Rendering Option 4 (AND operator)
/*
export default function Todo({task, isDone}){
    return (
        <li>{task} {isDone && ': Done'}</li>
    )
}
    */

// ! Conditional Rendering Option 4 (OR operator)
/*
export default function Todo({task, isDone}){
    return (
        <li>{task} {isDone || ': Do it'}</li>
    )
}
    */
// ! Conditional Rendering Option 5 (OR operator)
/*
export default function Todo({task, isDone}){
    return (
        <li>{task} {isDone || ': Do it'}</li>
    )
}
    */

// ! Conditional Rendering Option 6
let listItem;
export default function Todo({ task, isDone }) {
  if (isDone) {
    listItem = <li>Finished : {task}</li>;
  } else {
    listItem = <li>work on : {task}</li>;
  }
  return listItem;
}
