import silverfish from "./assets/All Silverfish Sounds (Minecraft) - Sound Effects for editing [G-VH2qsPUxY].mp3"

function makeSound() {
  return (
    <>
    <br></br>
    <br></br>
     <SoundButton></SoundButton>
    </>
  );
}

const SoundButton = () => {
  const playSound = () => {
    const audio = new Audio(silverfish);
    audio.play();
  };

  return <button className="makeitSound" onClick={playSound}>Escucha su testimonio :c</button>;
};

export default makeSound;
