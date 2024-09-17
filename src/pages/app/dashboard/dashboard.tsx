import { Helmet } from 'react-helmet-async'
const DashBoard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
    </>
  )
}

export default DashBoard
