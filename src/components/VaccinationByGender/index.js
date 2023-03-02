// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {data} = props

  return (
    <div className="vaccination-container">
      <h1 className="heading">Vaccination by gender</h1>

      <PieChart width={1000} height={300}>
        <Pie
          data={data}
          dataKey="count"
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
        >
          <Cell name="Others" fill="#2cc6c6" />
          <Cell name="Female" fill=" #5a8dee" />
          <Cell name="Male" fill=" #f54394" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
