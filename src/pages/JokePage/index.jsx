import React, { useEffect, useState } from "react";
import { getJokes } from "../../service";
import { JokeContent } from "../../components/Joke/JokeContent";
export const JokePage = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    handleJokes();
  }, []);
  console.log(jokes);
  async function handleJokes() {
    let jokeData = await getJokes();
    let newJokeData = jokeData.data.results.map((item) => ({
      ...item,
      vote: 0,
    }));  
    setJokes(newJokeData);
  }
  function onHandleAddVote(i) {
    console.log(i);
    let newData=[...jokes];
    newData[i]={...newData[i],
      vote: newData[i].vote+1,
    }
    newData.sort((item1,item2)=>item2.vote-item1.vote)
    setJokes(newData)
  }

  function onHandleRmvVote(i) {
    console.log(i);
    let newData=[...jokes];
    newData[i]={...newData[i],
      vote: newData[i].vote-1,
    }
    newData.sort((item1,item2)=>item2.vote-item1.vote)
    setJokes(newData)
  }
  return (
    <>
      <JokeContent
        rmv={onHandleRmvVote}
        add={onHandleAddVote}
        jokeData={jokes}
      />
    </>
  );
};
