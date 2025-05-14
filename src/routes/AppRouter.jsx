import { lazy, Suspense } from "react";
import { BrowserRouter ,Route, Routes } from 'react-router-dom';



const Home = lazy(()=> import('../pages/home/Home'))
const SignUp = lazy(()=> import('../pages/signup/SignUp'))

const AppRouter = () => {
  return (
        <BrowserRouter>
            <Suspense fallback= {<div>... Loading</div>}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/signup" element={<SignUp />}/>
            </Routes>

            </Suspense>
        </BrowserRouter>
  )
}

export default AppRouter