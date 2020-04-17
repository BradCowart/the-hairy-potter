
import { usePottery,deletePottery} from "./PotteryDataProvider.js";
import { PotteryHTML } from "./PotteryDisplayList.js";

const contentTarget = document.querySelector(".PotteryList")
const eventHub = document.querySelector(".container")

const render = PotteryToRender => {
    contentTarget.innerHTML = PotteryToRender.map(
        (PotteryObject) => {
            return PotteryHTML(PotteryObject)
        }
    ).join("")
}

export const PotteryList = () => {
     const PotteryToDisplay = usePottery()
     render(PotteryToDisplay)
 }

 eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deletePottery--")) {
      const [prefix, PotteryId] = clickEvent.target.id.split("--")

     deletePottery(PotteryId).then(
         () => {
             const updatedPottery = usePottery()
             render(updatedPottery)
         }
     )
  }
})