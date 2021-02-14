import { useRef, useEffect } from 'react'
import * as d3 from 'd3'

const SizeChart = ({ data }) => {

  useEffect(() => {
    let width = 800;
    let height = 600;

    let contourMargin = {
      top: 20,
      bottom: 50,
      left: 40,
      right: 100
    };

    let colorBarMargin = {
      top: 20,
      bottom: 50,
      left: 720,
      right: 50
    }

    let x = data.data.map( (d, i) => new Date(data.data[i].samptime));
    let pxX = x.length

    // "HYY_DMPS.d100e1" to 1e-9
    let mapDp = d => {
      let [_, dpStr] = d.split(".d")
      return +dpStr / 1e12
    }

    let y = data.columns.map(mapDp).sort( (a, b) => a - b );
    let pxY = y.length

    let z = [];
    for (let i=0; i < pxX; i++ ) {
      for (const k in data.data[i]) {
        if (k !== "samptime") {
          let index = i + pxX * (pxY - 1 - y.indexOf(mapDp(k)));
          z[index] = data.data[i][k];
        };
      };
    };

    console.log(z)

    const svg = d3.select(ref.current)
      .attr("vieBox", [0, 0, width, height])

    console.log(data);

    return svg.node();
  })

  const ref = useRef()

  return (
    <svg
      style={{backgroundColor: "LishtGrey"}}
      ref={ref}
    />
  )
};

export default SizeChart
