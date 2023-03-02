
import { Bars } from  'react-loader-spinner';
export default function Loader() {
  return (
  <div>
  <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{position: "fixed",
  top: "50%", 
  left: "50%", 
  transform: "translate(-50%, -50%)"}}
  visible={true}
/>
</div>
  );
}