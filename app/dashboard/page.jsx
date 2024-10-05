import Card from '../../components/Card'
import RightBar from '../../components/RightBar'
import Transaction from '../../components/Transaction'
import Chart from '../../components/Chart'

const DashboardPage = () => {
  return (
    <div className='flex gap-8 mt-4'>
      <div className='flex flex-col gap-6 w-9/12'>
        <div className='flex gap-6 justify-between'>
          <Card />
          <Card />
          <Card />
        </div>
      <Transaction />
      <Chart />
      </div>
      <div>
        <RightBar />
      </div>
    </div>
  )
}

export default DashboardPage