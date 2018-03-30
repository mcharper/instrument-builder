export default {
    player: {
        playing: false,
        volume: 0,
        bpm: 60
    },
    synthType: {
        type: 'synth'
    },
    oscillator: {
        type: 'sine',
        frequency: 440 ,
        detune: 0,
        phase: 0 ,
        partials: [ 1 ]
    },
    envelope: 
    { 
         attack: 0.2,
         attackNoise: 0,
         decay: 0.4,
         sustain: 0.6,
         release: 0.8 
    }
};
