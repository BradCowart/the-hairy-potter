
let pottery = [];

const eventHub = document.querySelector(".container");

export const usePottery = () => pottery.slice();

export const getPottery = () => {
  return fetch("http://localhost:3000/pottery")
    .then((response) => response.json())
    .then((parsedPottery) => {
      pottery = parsedPottery;
    });
};

export const savePottery = (pottery) => {
  return fetch("http://localhost:3000/pottery", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pottery),
  })
    .then(getPottery)
    .then(dispatchStateChangeEvent);
}

export const deletePottery = PotteryId => {
  return fetch(`http://localhost:3000/pottery/${PotteryId}`, {
      method: "DELETE"
  })
      .then(getPottery)
      .then(dispatchStateChangeEvent);
}

const dispatchStateChangeEvent = () => {
  const PotteryStateChangedEvent = new CustomEvent("potteryStateChanged");

  eventHub.dispatchEvent(PotteryStateChangedEvent);
};  