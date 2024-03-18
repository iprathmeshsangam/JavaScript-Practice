function ColorDash() {
  const colors = [
    { id: "Red" },
    { id: "Green" },
    { id: "yellow" },
    { id: "blue" },
    { id: "black" },
    { id: "white" },
    { id: "lavender" },
    { id: "pink" },
    { id: "orange" },
    { id: "purple" },
    {id: "grey"},
    {id:"magenta"}
  ];

  const colorBtn = colors.map((btn) => (
    <button
      key={btn.id}
      className="m-2 text-black"
      style={{ backgroundColor: btn.id }}
      onClick={changebackground}
    >
      {btn.id.toUpperCase()}
    </button>
  ));

  function changebackground(e) {
    document.body.style.backgroundColor = e.target.innerText;
  }
  return (
    <>
      <div className="w-full flex flex-wrap flex-shrink justify-between">
        {colorBtn}
      </div>
    </>
  );
}

export default ColorDash;
