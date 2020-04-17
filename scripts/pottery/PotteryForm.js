import { savePottery, usePottery } from "./PotteryDataProvider.js";
let GlobalId=1;                          
const potteryForm = document.querySelector(".PotteryForm");
const eventHub = document.querySelector(".container");

 export const PotteryForm = () => {
    const render = () => {
        potteryForm.innerHTML = `
            <section id="PotteryForm">
            <form>
            <fieldset>
            <label for="pottery_Shape">Shape:</label>
            <input type="text" id="Shape"></input>  
            
            <label for="pottery_Weight">Weight:</label>
            <input type="text" id="Weight"></input>  
            
            <label for="pottery_Height">Height:</label>
            <input type="text" id="Height"></input>                    
            </fieldset> 
            </form>
            <button id="Pottery_Button">Add Pottery</button>
            </section>
            `;
    };

    render();
  };

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "Pottery_Button") {
    const shape = document.querySelector("#Shape").value;
    const weight = document.querySelector("#Weight").value;
    const height = document.querySelector("#Height").value;
    GlobalId++
      try {
        const newPottery = {
          shape: shape,
          weight: weight,
          height: height,
          GlobalId:GlobalId
        };
        // Change API state and application state
        savePottery(newPottery).then(() => {
        });

        const PotteryAdded = new CustomEvent("PotteryAdded");
        eventHub.dispatchEvent(PotteryAdded);
      } catch {
        window.alert("Please make sure all fields are correct.");
      }
    }
  }
)

