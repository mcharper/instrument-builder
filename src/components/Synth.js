import Tone from "tone";

var synth;

export const play = (oscillator, envelope) => {
    Tone.context.close();
    Tone.context = new AudioContext();

    synth = new Tone.Synth({
        "oscillator" : oscillator,
        "envelope" : envelope
    }).toMaster();

    // synth.triggerAttackRelease("D3", "2n");

    var pattern = new Tone.Pattern(function(time, note){
        synth.triggerAttackRelease(note, 0.25);
    }, ["C4", "E4", "G4", "C5", "G4", "E4", "C4" ]);

    pattern.start(0);

    Tone.Master.volume.value = 0;
    Tone.Transport.start(1);
};

export const tweak = (oscillator, envelope) => {
    // synth.oscillator = oscillator;
    synth.envelope.attack = envelope.attack;
};

export const stop = () => {
  Tone.context.close();
};
