export default function GoldercoinComponent(){
    return(<>
 <svg id="coin" width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g id="coin-container">
    <circle cx="50" cy="50" r="40" fill="gold" stroke="orange" stroke-width="3"/>
    <g id="coin-face">
      <g className="face heads">
        <circle cx="50" cy="50" r="35" fill="gold" stroke="orange" stroke-width="3"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="20" font-family="Arial" fill="orange">#Z</text>
      </g>
      <g className="face tails">
        <circle cx="50" cy="50" r="35" fill="gold" stroke="orange" stroke-width="3"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="20" font-family="Arial" fill="orange">#Z</text>
      </g>
    </g>
  </g>
</svg>

</>)
}