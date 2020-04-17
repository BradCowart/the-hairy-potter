import { getPottery } from "./pottery/PotteryDataProvider.js";
import { PotteryForm } from "./pottery/PotteryForm.js";
import { PotteryList } from "./pottery/PotteryList.js"
getPottery()
    .then(PotteryForm)
    .then(PotteryList)
    
