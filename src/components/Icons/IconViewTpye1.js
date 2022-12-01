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
      d="M6.5 9.5H7H6.5ZM6.5 11.5385H6H6.5ZM11.5385 14.5385V14.0385V14.5385ZM9.5 14.5385V15.0385H9.5L9.5 14.5385ZM14.5385 9.5H14.0385H14.5385ZM14.5385 11.5385H15.0385H14.5385ZM11.5385 6.5L11.5385 6L11.5385 6.5ZM9.50001 6.5L9.50001 6L9.50001 6.5ZM17.4615 9.5H16.9615H17.4615ZM17.4615 11.5385H17.9615H17.4615ZM22.5 14.5385V14.0385V14.5385ZM20.4615 14.5385V15.0385V14.5385ZM25.5 9.5H25H25.5ZM25.5 11.5385H26H25.5ZM22.5 6.5L22.5 6L22.5 6.5ZM20.4615 6.5L20.4615 7L20.4615 6.5ZM6.5 20.4615H7H6.5ZM6.5 22.5H6H6.5ZM11.5385 25.5V25V25.5ZM9.5 25.5V26V25.5ZM14.5385 20.4615H14.0385H14.5385ZM14.5385 22.5H15.0385H14.5385ZM11.5385 17.4615L11.5385 17.9615L11.5385 17.4615ZM9.50001 17.4615L9.50001 16.9615L9.50001 17.4615ZM17.4615 20.4615H16.9615H17.4615ZM17.4615 22.5H17.9615H17.4615ZM22.5 25.5V25V25.5ZM20.4615 25.5V26V25.5ZM25.5 20.4615H25H25.5ZM25.5 22.5H26H25.5ZM22.5 17.4615L22.5 17.9615L22.5 17.4615ZM20.4615 17.4615L20.4615 16.9615L20.4615 17.4615ZM6 9.5L6 11.5385H7L7 9.5H6ZM11.5385 14.0385L9.5 14.0385L9.5 15.0385L11.5385 15.0385V14.0385ZM14.0385 9.5V11.5385H15.0385V9.5H14.0385ZM11.5385 6L9.50001 6L9.50001 7L11.5385 7L11.5385 6ZM15.0385 9.5C15.0385 7.56701 13.4715 6.00001 11.5385 6L11.5385 7C12.9192 7.00001 14.0385 8.11929 14.0385 9.5H15.0385ZM7 9.5C7 8.11929 8.11929 7 9.50001 7L9.50001 6C7.56701 6 6 7.567 6 9.5H7ZM6 11.5385C6 13.4715 7.567 15.0385 9.5 15.0385V14.0385C8.11929 14.0385 7 12.9192 7 11.5385H6ZM11.5385 15.0385C13.4715 15.0385 15.0385 13.4714 15.0385 11.5385H14.0385C14.0385 12.9192 12.9192 14.0385 11.5385 14.0385V15.0385ZM16.9615 9.5V11.5385H17.9615V9.5H16.9615ZM22.5 14.0385L20.4615 14.0385V15.0385L22.5 15.0385V14.0385ZM25 9.5V11.5385H26V9.5H25ZM22.5 6L20.4615 6L20.4615 7L22.5 7L22.5 6ZM26 9.5C26 7.56701 24.433 6.00001 22.5 6L22.5 7C23.8807 7.00001 25 8.11929 25 9.5H26ZM17.9615 9.5C17.9615 8.11929 19.0808 7 20.4615 7L20.4615 6C18.5285 6 16.9615 7.567 16.9615 9.5H17.9615ZM16.9615 11.5385C16.9615 13.4715 18.5285 15.0385 20.4615 15.0385V14.0385C19.0808 14.0385 17.9615 12.9192 17.9615 11.5385H16.9615ZM22.5 15.0385C24.433 15.0385 26 13.4714 26 11.5385H25C25 12.9192 23.8807 14.0385 22.5 14.0385V15.0385ZM6 20.4615L6 22.5H7L7 20.4615H6ZM11.5385 25H9.5V26H11.5385V25ZM14.0385 20.4615V22.5H15.0385V20.4615H14.0385ZM11.5385 16.9615L9.50001 16.9615L9.50001 17.9615L11.5385 17.9615L11.5385 16.9615ZM15.0385 20.4615C15.0385 18.5285 13.4715 16.9615 11.5385 16.9615L11.5385 17.9615C12.9192 17.9615 14.0385 19.0808 14.0385 20.4615H15.0385ZM7 20.4615C7 19.0808 8.11929 17.9615 9.50001 17.9615L9.50001 16.9615C7.56701 16.9615 6 18.5285 6 20.4615H7ZM6 22.5C6 24.433 7.567 26 9.5 26V25C8.11929 25 7 23.8807 7 22.5H6ZM11.5385 26C13.4715 26 15.0385 24.433 15.0385 22.5H14.0385C14.0385 23.8807 12.9192 25 11.5385 25V26ZM16.9615 20.4615V22.5H17.9615V20.4615H16.9615ZM22.5 25H20.4615V26H22.5V25ZM25 20.4615V22.5H26V20.4615H25ZM22.5 16.9615L20.4615 16.9615L20.4615 17.9615L22.5 17.9615L22.5 16.9615ZM26 20.4615C26 18.5285 24.433 16.9615 22.5 16.9615L22.5 17.9615C23.8807 17.9615 25 19.0808 25 20.4615H26ZM17.9615 20.4615C17.9615 19.0808 19.0808 17.9615 20.4615 17.9615L20.4615 16.9615C18.5285 16.9615 16.9615 18.5285 16.9615 20.4615H17.9615ZM16.9615 22.5C16.9615 24.433 18.5285 26 20.4615 26V25C19.0808 25 17.9615 23.8807 17.9615 22.5H16.9615ZM22.5 26C24.433 26 26 24.433 26 22.5H25C25 23.8807 23.8807 25 22.5 25V26Z"
      fill={props.color !== '' && props.color != null ? props.color : 'black'}
    />
  </Svg>
);
export default SVGComponent;
