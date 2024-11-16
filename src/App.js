import React from 'react';
import * as Tone from 'tone';

function App() {
    const playSynth = () => {
        const synth = new Tone.Synth().toDestination();
        Tone.start();
        synth.triggerAttackRelease("C4", "8n");
    };

    return (
        <div>
            <h1>DAW Project</h1>
            <button onClick={playSynth}>Play Synth Sound</button>
        </div>
    );
}

export default App;