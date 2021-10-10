import React, { useRef , useEffect, RefObject } from 'react';

const VintageRecorder: React.FC = () => { 
  const recorderInputRef: RefObject<HTMLInputElement> = useRef(null);
  const playAudioOutputRef: RefObject<HTMLAudioElement> = useRef(null); 

  useEffect(() => {
	  if(recorderInputRef.current) {
      recorderInputRef.current.addEventListener('change', (ev: any): void => {
        const file: File = ev.target.files[0];
        const url: string = URL.createObjectURL(file);
		if (playAudioOutputRef.current) {
        	playAudioOutputRef.current.src = url;
		}
      });
	}	
      return () => {
		if(recorderInputRef.current) {
        	recorderInputRef.current.addEventListener('change', () => {});
		}
      }
  }, [])

  return (
    <>
		<div id="VintageRecorder">
		<div className="VintageRecorder-handle"/>
		<div className="VintageRecorder-body">
			<section className="tape">
				<button data-playing="false" className="tape-controls-play" role="switch" aria-checked="false">
					<span>Play/Pause</span>
				</button>
			</section>	
		</div>
		</div>
		<input type="file" accept="audio/*" capture id="recorder" ref={recorderInputRef}/>
		<audio id="player" controls ref={playAudioOutputRef}/>
	</>
  );
}

export default VintageRecorder;
