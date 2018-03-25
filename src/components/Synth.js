import Tone from "tone";

export const play = (envelope) => {
    Tone.context.close();
    Tone.context = new AudioContext();

    var synth = new Tone.Synth({
        "oscillator" : {
            "type" : "sawtooth",
            "modulationFrequency" : 0.2
        },
        "envelope" : {
            "attack" : envelope.attack,
            "decay" : envelope.decay,
            "sustain" : envelope.sustain,
            "release" : envelope.release,
        }
    }).toMaster();

    synth.triggerAttackRelease("D3", "4n");

    Tone.Master.volume.value = -32;
    Tone.Transport.start(1);
};

export const stop = () => {
  Tone.context.close();
};
