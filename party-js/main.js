const audios = {
  1: "fizzle.wav",
  2: "hat.wav",
  3: "kick.wav",
  4: "snare.wav",
  5: "snarezz.wav",
  6: "synth.wav",
  7: "vox1.wav",
  8: "vox2.wav",
  9: "vox3.wav",
  0: "wood.wav",
};

document.addEventListener("keydown", (event) => {
  document.querySelectorAll(".blow").forEach((element) => {
    element.classList.remove("blow");
  });
  var name = event.key;
  sounds(name);
  false;
});
const sounds = (id) => {
  const audio = new Audio(`./sounds/${audios[id]}`);
  audio.play();
  const element = document
    .getElementById(`balloon_${id}`)
    .classList.add("blow");
};
