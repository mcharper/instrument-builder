import Tone from "tone";

export const play = (oscillator, envelope) => {
    Tone.context.close();
    Tone.context = new AudioContext();

    var synth = new Tone.Synth({
        "oscillator" : oscillator,
        "envelope" : envelope
    }).toMaster();

    synth.triggerAttackRelease("D3", "4n");

    Tone.Master.volume.value = -10;
    Tone.Transport.start(1);
};

export const stop = () => {
  Tone.context.close();
};
