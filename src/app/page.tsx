'use client'
import Nav from '@/pages/nav';
//const Nav = dynamic(() => import('../pages/nav'), { ssr: false })

import dynamic from 'next/dynamic';

export default function Home() {
  return (
    <>
      <Nav/>
      Home
    </>
  );
}
