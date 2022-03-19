import React, { useState, useEffect } from "react";
import './Test.css'

const Test = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('増やします')
    // setCount(count + 1)
  }, [count]);

  return (
    <div>
      <h1>ここに出る数値を無限ループさせPCに負担をかけてみる</h1>
      <h2>※なお実際のアプリでは<span className="Red">絶対にしてはいけません</span></h2>
      <h2 className="Red">※テロ行為になります</h2>
      <button className="Test" onClick={() => {
        setCount(count + 1)
      }}>
        {count}
      </button>
    </div>
  )
}

export default Test