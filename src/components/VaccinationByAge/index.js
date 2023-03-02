// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {data} = props

  return (
    <div className="vaccination-container">
      <h1 className="heading">Vaccination by Age</h1>
      <PieChart width={1000} height={300}>
        <Pie data={data} dataKey="count">
          <Cell name="18-44" fill="#2cc6c6" />
          <Cell name="44-60" fill=" #5a8dee" />
          <Cell name="Above 60" fill=" #f54394" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
