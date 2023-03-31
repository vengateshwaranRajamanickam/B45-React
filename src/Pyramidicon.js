
import './App.css';

export default function App() {
  let Star = [3, 5, 7];
  function iconloop(num) {
    return(
    <div>
      {
      Array(num).fill(0).map(() =>
        <i class="fa-brands fa-github"></i>
      )}
    </div>
    )
  }
  return (
    <div>
      {
        Star.map(value =>
          <div>
            {
              iconloop(value)
            }
          </div>)
      }
    </div>
  )
}
