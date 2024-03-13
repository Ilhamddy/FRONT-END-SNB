import Sidebar from './component/Sidebar';
import NewsDashboard from './news/NewsDashboard';
const PageDashboard = () => {
  return (
   <main>
     <div className="pt-20 grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
   <Sidebar/>
   <NewsDashboard />
  </div>
   </main>
  )
}

export default PageDashboard