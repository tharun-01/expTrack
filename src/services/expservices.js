const dummyData = [
    {
      title: "Milk",
      description: "25rs/L",
      date:"2021-01-08"
    },
    {
      title: "Gas",
      description: "800/Piece",
      date:"2021-01-08"
    },
    {
      title: "Paper",
      description: "120/Month",
      date:"2021-01-08"
    },
    {
      title: "Milk",
      description: "25rs/L",
      date:"2021-01-08"
    },
    {
      title: "Gas",
      description: "800/Piece",
      date:"2021-01-08"
    },
    {
      title: "Paper",
      description: "120/Month",
      date:"2021-01-09"
    },
    {
      title: "Milk",
      description: "25rs/L",
      date:"2021-01-09"
    },
    {
      title: "Gas",
      description: "800/Piece",
      date:"2021-01-09"
    },
    {
      title: "Paper",
      description: "120/Month",
      date:"2021-01-09"
    },
  ];
export function sample() {
  return "Return hello world";
}

export function todo() {
  return "todo";
}

export function returnMyCardsForDay(currDay) {
  let res = dummyData.filter(x=>x.date==currDay)
  console.log(res)
  return res
}
