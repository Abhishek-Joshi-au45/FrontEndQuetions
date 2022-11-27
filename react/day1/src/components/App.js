import React from 'react'
import YoutubeCard from './youtubeCard'
import videoData from '../mock/videoData'

//coming from aPi
//Functional Component
function App() {

  return (
    <div className='container d-flex flex-wrap'>
      {videoData.map(data => {
        return <YoutubeCard videoDetail={data} />
      })}
    </div>
  ) // should return JSX
}

export default App //module.exports = App