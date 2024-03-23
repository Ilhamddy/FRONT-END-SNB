"use client"
import React, { useEffect } from 'react'
import RegisterPage from './component/Register'
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';

const page = () => {
  const userId = useAppSelector((state) => state.users);


  console.log(userId);
  
  const router = useRouter();
  useEffect(() => {
    if (userId?.id) {
      router.push('/dashboard');
    }
  });


  return (
    <main>
<RegisterPage/>
    </main>
  )
}

export default page