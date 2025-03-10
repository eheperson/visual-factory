
const FaceContainer = ({ children, width, height, centerX, centerY }) => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX},${centerY})`}>
      {children}
    </g>
  </svg>
);

export default FaceContainer;