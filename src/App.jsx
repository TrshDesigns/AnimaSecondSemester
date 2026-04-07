import Tarjeta from "./Tarjeta";

function App() {
  return (
    <>
      <Tarjeta
        desc="Silverfishes are one of the most unapreciated in danger species of the minecraft world"
        entity="Silverfish"
        imgUrl="https://media.tenor.com/7q1Hi2qweUMAAAAj/minecraft-silverfish.gif"
      >
        <h2>Use full screen for a better experience! 🗖</h2>
      </Tarjeta>
      <Tarjeta
        desc="Endermites are one of the rarest creatures and are actively being hunt by enermands in their own territory, a creature consider a parasite who suffers the consequences of mass harvesting for its important nutrients to the habitants of the overworld"
        imgUrl="https://minecraft.wiki/images/MCD_Endermite_Pet_Idle.gif?a0049"
        entity="Endermite"
      ></Tarjeta>
      <Tarjeta
        desc="Those mobs are obligated to do forced labor their size and force, their arms end up curving because of the weight, with your donations we can make them have a free life with their families"
        imgUrl="https://media.tenor.com/zSFLGYR2VFwAAAAj/copper-golem.gif"
        entity="CopperGolem"
      ></Tarjeta>
    </>
  );
}

/// https://minecraft.wiki/images/MCD_Endermite_Pet_Idle.gif?a0049
export default App;
