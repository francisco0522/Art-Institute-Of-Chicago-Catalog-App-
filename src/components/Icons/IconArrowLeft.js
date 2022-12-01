import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={props.size !== '' && props.size != null ? props.size : 32}
    height={props.size !== '' && props.size != null ? props.size : 32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M25.9962 15.9998L5.99981 16.0037M5.99981 16.0037L11.3834 21.3892M5.99981 16.0037L11.3834 10.6181"
      stroke={props.color !== '' && props.color != null ? props.color : 'black'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
