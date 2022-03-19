import React, {useState, useEffect} from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  useEffect=(() => {
    console.log('出力')
    setCount(count + 1)
  },[count]);

  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>
        {count}
      </button>
    </div>
  )
}

export default Test