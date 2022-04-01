import { useState } from "react";
import "./index.css";

const GridLayout = (props) => {
  const [toggleRefreshColor, setToggleRefreshColor] = useState(false);

  /*  return
   *  Hexadecimal (#RRGGBB)
   */
  const generteRandomColor = () => {
    //16 Possible Hexadecimal Values ( 0 -> F)
    var possibleHexadecimalValues = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += possibleHexadecimalValues[Math.floor(Math.random() * 16)]; //Generate the range between 0 and 15 as the index of string starts from zero
    }

    return color;
  };

  /*  Params
   *   1) index  :  start_index that will show as label of each box on grid view
   *   2) num_boxes   : number of boxes that will create
   */
  const generateItems = (index, num_boxes) => {
    var items = [];
    for (var i = 0; i < num_boxes; i++) {
      items.push(
        <div
          key={`${i + index}`}
          onClick={() => setToggleRefreshColor(!toggleRefreshColor)} //When state is updated, component will be re-rendered
          className={`item box${i + 1}`}
          style={{ background: generteRandomColor() }}
        >
          {index + i}
        </div>
      );
    }

    return items;
  };

  return (
    <>
      <div className="container1">{generateItems(1, 4)}</div>
      <div className="container2">{generateItems(5, 5)}</div>
    </>
  );
};

export default GridLayout;
