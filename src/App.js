import './App.css'

export default function App() {
  return (
    <div className="header">
      <h1>Planets data</h1>
      <table style={{ width: '99%' }}>
        <caption>
          Data about the planets of our solar system (Planetary facts taken from
          <a href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/">
            Nasa's Planetary Fact Sheet - Metric
          </a>
          ).
        </caption>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Mass (1024kg)</th>
          <th>Diameter (km)</th>
          <th>Density (kg/m3)</th>
          <th>Gravity (m/s2)</th>
          <th>Length of day (hours)</th>
          <th>Distance from Sun (106km)</th>
          <th>Mean temperature (°C)</th>
          <th>Number of moons</th>
          <th id="note">Notes</th>
        </tr>
        <tr>
          <th rowspan="4" id="terrestrial">
            Terrestrial planets
          </th>
          <td>Mercury</td>
          <td>0.330</td>
          <td>4,879</td>
          <td>5427</td>
          <td>3.7</td>
          <td>4222.6</td>
          <td>57.9</td>
          <td>167</td>
          <td>0</td>
          <td>Closest to the Sun</td>
        </tr>
        <tr>
          <td>Venus</td>
          <td>4.87</td>
          <td>12,104</td>
          <td>8.9</td>
          <td>5243</td>
          <td>2802.0</td>
          <td>108.2</td>
          <td>464</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Earth</td>

          <td>5.97</td>
          <td>12,756</td>
          <td>5514</td>
          <td>9.8</td>
          <td>24.0</td>
          <td>149.6</td>
          <td>15</td>
          <td>1</td>
          <td>Our world</td>
        </tr>
        <tr>
          <td>Mars</td>
          <td>0.642</td>
          <td>6,792</td>
          <td>3933 </td>
          <td>3.7</td>
          <td>24.7</td>
          <td>227.9</td>
          <td>-65</td>
          <td>2</td>
          <td> The red planet</td>
        </tr>
        <tr>
          <td rowspan="4" className="ok">
            <tr className="ok">
              <th rowspan="2" style={{ width: '50%' }} className="ok">
                Jovian planets
              </th>
              <td className="ok">Gas giants</td>
            </tr>
            <tr className="ok">
              <td rowspan="2" className="ok">
                Ice giants
              </td>
            </tr>
          </td>
          <td>Jupiter</td>
          <td>1898 </td>
          <td>142,984</td>
          <td>1326</td>
          <td>23.1</td>
          <td>9.9</td>
          <td>778.6</td>
          <td>-110</td>
          <td> 67 </td>
          <td>The largest planet</td>
        </tr>
        <tr>
          <td>Saturn </td>
          <td>568</td>
          <td>120,536</td>
          <td>687</td>
          <td>9.0</td>
          <td>10.7</td>
          <td>1433.5</td>
          <td>-140</td>
          <td>62</td>
          <td></td>
        </tr>
        <tr>
          <td>Uranus </td>
          <td> 86.8 </td>
          <td>51,118</td>
          <td>1271 </td>
          <td>8.7</td>
          <td>17.2</td>
          <td>2872.5</td>
          <td>-195</td>
          <td>27</td>
          <td></td>
        </tr>
        <tr>
          <td>Neptune</td>
          <td>102</td>
          <td>49,528</td>
          <td>1638</td>
          <td> 11.0</td>
          <td> 16.1</td>
          <td>4495.1</td>
          <td>-200</td>
          <td>14</td>
          <td></td>
        </tr>
        <tr>
          <th>Dwarf planets</th>
          <td>Pluto</td>
          <td>0.0146</td>
          <td>2,370</td>
          <td>2095</td>
          <td>0.7</td>
          <td>153.3</td>
          <td>5906.4</td>
          <td>-225</td>
          <td>5</td>
          <td>
            Declassified as a planet in 2006, but this{' '}
            <a href="#">remains controversial</a>.
          </td>
        </tr>
      </table>
    </div>
  )
}
