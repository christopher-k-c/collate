import Footer from "@/components/reusable/footer/Footer"
import Nav from "@/components/reusable/header/Nav"
import {spacing, layouts} from './tailwindStyles';
import { useState, useEffect } from "react";


export default function Home() {



  return (
    
    <> 
      <main className={`${layouts.centerContainer} ${layouts.flexCenter} flex-col`}>
        <Nav></Nav>

        <Footer></Footer>
      </main>
    </>
  )
}
