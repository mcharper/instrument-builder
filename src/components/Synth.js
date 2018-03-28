import Tone from "tone";

var synth;

export const play = (oscillator, envelope) => {
    Tone.context.close();
    Tone.context = new AudioContext();

    synth = new Tone.Synth({
        "oscillator" : oscillator,
        "envelope" : envelope
    }).toMaster();

    var pattern = new Tone.Pattern(function(time, note){
        synth.triggerAttackRelease(note, 0.25);
    }, ["C4", "E4", "G4", "C5", "G4", "E4",
        "C4", "E4", "G4", "C5", "G4", "E4",
        "C4", "F4", "G4", "A4", "G4", "F4",
        "C4", "F4", "G4", "A4", "G4", "F4",
        "C4", "E4", "G4", "C5", "G4", "E4",
        "C4", "E4", "G4", "C5", "G4", "E4",
        "C4", "E4", "F4", "G4", "A4", "E4",
        "C4", "E4", "F4", "G4", "A4", "E4" ]);

    pattern.start(0);

    Tone.Master.volume.value = 0;
    Tone.Transport.start(1);
};

export const tweak = (oscillator, envelope) => {
    if(synth) {
        synth.oscillator.type = oscillator.type;
        synth.envelope.attack = envelope.attack;
        synth.envelope.decay = envelope.decay;
        synth.envelope.sustain = envelope.sustain;
        synth.envelope.release = envelope.release;
    }
};

export const stop = () => {
  Tone.context.close();
};
