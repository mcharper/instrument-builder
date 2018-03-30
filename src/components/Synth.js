import Tone from "tone";

var synth;

export const play = (player, synthType, oscillator, envelope) => {
    Tone.context.close();
    Tone.context = new AudioContext();

    if(synthType.type == 'synth') {
        synth = new Tone.Synth({
            "oscillator" : oscillator,
            "envelope" : envelope
        }).toMaster();
    }
    else if(synthType.type == 'pluck') {
        synth = new Tone.PluckSynth({
            "oscillator" : oscillator,
            "envelope" : envelope
        }).toMaster();
    }
    else {
        synth = new Tone.MembraneSynth({
            "oscillator" : oscillator,
            "envelope" : envelope
        }).toMaster();
    }

    var freeverb = new Tone.Freeverb().toMaster();
//    freeverb.roomSize.value = player.reverb;
    var reverbed = synth.connect(freeverb);

    var pattern = new Tone.Pattern(function(time, note){
        reverbed.triggerAttackRelease(note, 0.25);
    }, ["C1", "E1", "G1", "C1", "G1", "E1",
        "C4", "E4", "G4", "C5", "G4", "E4",
        "C4", "F4", "G4", "A4", "G4", "F4",
        "C4", "F4", "G4", "A4", "G4", "F4",
        "C4", "E4", "G4", "C5", "G4", "E4",
        "C4", "E4", "G4", "C5", "G4", "E4",
        "C4", "E4", "F4", "G4", "A4", "E4",
        "C4", "E4", "F4", "G4", "A4", "E4" ]);

    pattern.start(0);

    console.log(JSON.stringify(player))
    Tone.Master.volume.value = player.volume;
    Tone.Transport.bpm.value = player.bpm;
    Tone.Transport.start(1);
};

export const tweak = (oscillator, envelope) => {
    if(synth) {
        try {
            synth.oscillator.type = oscillator.type;
            synth.envelope.attack = envelope.attack;
            synth.envelope.decay = envelope.decay;
            synth.envelope.sustain = envelope.sustain;
            synth.envelope.release = envelope.release;
        }
        catch(e) {
            console.log("Could not tweak");
        }
    };
};

export const stop = () => {
  Tone.context.close();
};
