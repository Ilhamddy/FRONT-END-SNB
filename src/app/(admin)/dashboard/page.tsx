'use client'

import { useAppSelector } from '@/lib/hooks';
import Sidebar from './component/Sidebar';
import NewsDashboard from './news/NewsDashboard';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const PageDashboard = () => {
  const userId = useAppSelector((state) => state.users);
console.log(userId.id);


    const router = useRouter();
    useEffect(() => {
      if (userId.id === 0) {
        router.push('/');
      }
    }, [userId]);
  
  
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