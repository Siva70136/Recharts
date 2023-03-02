// Write your code here
import {Bar, BarChart, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {info} = props
  const vaccinationData = info.map(each => ({
    vaccineDate: each.vaccine_date,
    dose1: each.dose_1,
    dose2: each.dose_2,
  }))
  console.log(vaccinationData)

  const yAxis = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vaccination-container">
      <h1 className="heading">Vaccination Coverage</h1>

      <BarChart data={vaccinationData} width={1000} height={300}>
        <XAxis dataKey="vaccineDate" tick={{stroke: 'gray', strokeWidth: 1}} />
        <YAxis tickFormatter={yAxis} tick={{stroke: 'gray', strokeWidth: 0}} />
        <Bar dataKey="dose1" name="Dose1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose2" name="Dose2" fill="#f54394" barSize="20%" />
        <Legend iconType="diamond" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
