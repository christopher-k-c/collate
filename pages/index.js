import Footer from "@/components/reusable/footer/Footer"
import NavigationBar from "@/components/reusable/header/Nav/NavigationBar"
import {layouts} from './tailwindStyles';



export default function Home() {



  return (
    

      <main className={`${layouts.centerContainer} ${layouts.flexCenter} flex-col`}>
        
        {/* <DesktopNav></DesktopNav> */}
        <NavigationBar></NavigationBar>

        <Footer chris={{name:"Chris", age: 32, hobby: "cycling"}}></Footer>
      </main>

  )
}
