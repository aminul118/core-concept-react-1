import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './singer'

function App() {
  const actors = ['Sakib', 'Soriful Raj', 'Jasim', 'Rubel', 'Salman Shah'];
  const singers =[
    { id: 1, name: 'Dr. Mahfuzur Rahman', age: 68},
    { id: 2, name: 'Eva Rahman', age: 38},
    { id:3 ,name: 'Suvro Dev', age: 58},
    { id: 4, name: 'Pritom', age: 28},
  ]
  return (
    <>
    <h3>Vite + React</h3>
    {
      singers.map(singer => <Singer singer={singer}></Singer>)
    }

    <Actor name ={'Bappa Raz'}></Actor>
    {
      actors.map(actor => <Actor name={actor}></Actor>)
    }

     {/* 
     <Device name = 'Laptop' price='55'></Device>
     <Device name = 'Mobile' price='17'></Device>
     <Device name= 'watch' price= '3' ></Device>
     <Person></Person>
     <Student grade='7' score='99'></Student>
     <Student grade= {12} score = '55'></Student>
     <Student></Student>
     <Developer></Developer>
     <StyleAdd3></StyleAdd3>
     <Todo 
     task='Learn React'
     isDone = {true}></Todo>
     <Todo 
     task='Explore Core Concept'
     isDone = {false}></Todo>
     <Todo 
     task='Try JSX'
     isDone={true}></Todo> */}


    </>
  )
}
//! Simple Props
function Device(props){
  console.log(props)
  return (
    <div>
      <h2>This Device: {props.name} Price: {props.price}</h2>
    </div>
  )
}

function Person(){
  const age =25;
  const money =20;
  const person = {name: 'Sakib', age: 12}
  return <h3>I am {person.name} with age :{age+money}</h3>
}
//! Props Using Destructuring method
// const {grade, score} ={grade: '7', score: '7'} Destructuring method
function Student({grade = 1, score = 0}){
  console.log(grade,score)

  //! CSS add 1
  return (
<div className='student'> 
    <h3>This is a student</h3>
     <p>Class: {grade}</p>
    <p>Score: {score}</p>
   
  </div>

  ) 
}

//! CSS Add 2
function Developer(){
  const developerStyle = {
    margin: "20px",
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return(
    <div style={developerStyle}>
      <h5>Devo</h5>
      <p>Coding: </p>
    </div>
  )
}

//! CSS add 3
function StyleAdd3(){
  return (
 <div style={{
    margin: "20px",
    padding: '20px',
    border: '2px solid blue',
    borderRadius: '20px'
  }}>
      <h5>Devo</h5>
      <p>Coding: </p>
    </div>

  )
}


export default App
