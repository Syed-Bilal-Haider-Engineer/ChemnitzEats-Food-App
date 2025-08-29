import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
   <>
    <Header/>
    <main>
         <div className='py-4'>
            <div className='max-w-3xl mx-auto'>
                <Outlet/>
            </div>
         </div>
    </main>
   </>
  )
}

export default Rootlayout