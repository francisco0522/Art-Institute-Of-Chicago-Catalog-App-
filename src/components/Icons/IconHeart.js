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
      d="M17.3308 8.90318L17.6845 9.25653L17.3308 8.90318ZM24.0984 15.6783L23.7446 15.325C23.7399 15.3297 23.7353 15.3345 23.7307 15.3394L24.0984 15.6783ZM16 24.4643L15.6324 24.8032C15.727 24.9059 15.8603 24.9643 16 24.9643C16.1397 24.9643 16.273 24.9059 16.3676 24.8032L16 24.4643ZM14.6692 8.90318L14.3155 9.25653L14.3155 9.25653L14.6692 8.90318ZM7.90161 8.90318L8.25536 9.25653L7.90161 8.90318ZM7.90161 15.6783L8.26926 15.3394C8.26473 15.3345 8.26009 15.3297 8.25536 15.325L7.90161 15.6783ZM16 10.2355L15.6463 10.5888C15.74 10.6827 15.8673 10.7355 16 10.7355C16.1327 10.7355 16.26 10.6827 16.3538 10.5888L16 10.2355ZM17.6845 9.25653C19.3581 7.58116 22.0711 7.58116 23.7446 9.25653L24.4521 8.54982C22.388 6.48339 19.0412 6.48339 16.977 8.54982L17.6845 9.25653ZM23.7446 9.25653C25.4185 10.9322 25.4185 13.6493 23.7446 15.325L24.4521 16.0317C26.516 13.9655 26.516 10.6159 24.4521 8.54982L23.7446 9.25653ZM23.7307 15.3394L15.6324 24.1254L16.3676 24.8032L24.466 16.0172L23.7307 15.3394ZM7.54786 8.54982C5.48405 10.6159 5.48405 13.9655 7.54786 16.0317L8.25536 15.325C6.58155 13.6493 6.58155 10.9322 8.25536 9.25653L7.54786 8.54982ZM7.53397 16.0172L15.6324 24.8032L16.3676 24.1254L8.26926 15.3394L7.53397 16.0172ZM16.977 8.54982L15.6463 9.88209L16.3538 10.5888L17.6845 9.25653L16.977 8.54982ZM15.023 8.54982C12.9588 6.4834 9.61199 6.48339 7.54786 8.54982L8.25536 9.25653C9.92887 7.58116 12.6419 7.58116 14.3155 9.25653L15.023 8.54982ZM16.3538 9.88209L15.023 8.54982L14.3155 9.25653L15.6463 10.5888L16.3538 9.88209Z"
      fill={props.color !== '' && props.color != null ? props.color : 'black'}
    />
  </Svg>
);
export default SVGComponent;
