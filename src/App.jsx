import { useState } from 'react'
import Tweets from './Tweets'
import Tweet from './Tweet'


function App() {
  const [count, setCount] = useState(0);
  const tweets = ["Tweet1", "Tweet2", "Tweet3", "Tweet4"];
  const display = (tweet) => { console.log(tweet) }

  return (
    <>
      <p>hello</p>
      <p onClick={() => {
        setCount((prev) => { return prev + 1 });
      }}>click</p>
      <p>count : {count}</p>
      <p>count : {count}</p>
      <Tweets tweets={tweets} display={display} />
    </>
  )
}

export default App
