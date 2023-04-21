import Footer from "@/components/reusable/footer/Footer"
import DesktopNav from "@/components/reusable/header/Nav/DesktopNav"
import {spacing, layouts} from './tailwindStyles';
import { useState, useEffect } from "react";


export default function Home() {



  return (
    

      <main className={`${layouts.centerContainer} ${layouts.flexCenter} flex-col`}>
        
        <DesktopNav></DesktopNav>

        <Footer chris={{name:"Chris", age: 32, hobby: "cycling"}}></Footer>
      </main>

  )
}
