import './App.css';
import { lazy, Suspense, useEffect, useState } from 'react';
import useGetGifs from './hooks/getGifs.ts';

const Gif = lazy(() => import('./components/gifs/Gif.tsx'))

function App() {
  const {gifs, setGifs} = useGetGifs();

  return (
    <div className="App">
      <div style={{display:'flex', flexDirection:'column', marginTop:'1rem', alignItems:'center'}}>
        <Suspense fallback={<p>Loading</p>}>
          <Gif gifList={gifs}/>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
