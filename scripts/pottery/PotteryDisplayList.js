export const PotteryHTML = (PotteryObject) => {
    return`
    <div class="pottery--list">
    Shape: ${PotteryObject.shape}
    Weight: ${PotteryObject.weight}
    Height: ${PotteryObject.height}
    <button id="deletePottery--${PotteryObject.id}">Delete</button>

    </div>
    
    `
 }