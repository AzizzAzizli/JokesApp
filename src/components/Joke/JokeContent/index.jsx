import React from 'react'
import styles from './JokeContent.module.css'
import { JokeCard } from '../JokeCard'
import {smiles}from "../../../constants/smiles"
export const JokeContent = ({jokeData , add,rmv}) => {

function selectSmile(i){
  let smile="";
  if(i<3){
    smile=smiles.smile1
  }
  else if(i>=3 && i<6){
    smile=smiles.smile2
  }
  else if(i>=6 && i<8){
    smile=smiles.smile3
  }
  else if(i>=8 && i<=9){
    smile=smiles.smile4
  }
  return smile
}
  return (
    <div className={styles.content}>
<div className={styles.box}>
    <div className={styles.leftSide}>
        <p>Select Your Joke</p>
        <img style={{width:"50%",borderRadius:"10px"}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.rSRni63IIZZyQtEk-7LwmAHaFj%26pid%3DApi&f=1&ipt=5ea6c2f9796452f2ce2cee9b9bf46f21aa09b0fc9e6f44d175070f6a12483b2a&ipo=images" alt="" />
    </div>
    <div className={styles.rightSide}>
    {!jokeData.length && <h1>Loading...</h1>}
       {jokeData?jokeData.map((item,index)=>{

let smile=selectSmile(index)

       return (<JokeCard add={()=>add(index)} rmv={()=>rmv(index)} smile={smile} vote={item.vote}  joke={item.joke}/>)
       }):"Loading..."} 
       

    </div>
</div>
    </div>
  )
}
