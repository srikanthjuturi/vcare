import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Loader from './Loader';
import { createContext } from 'react';

import Rescedule from './components/Rescedule';
 
const GoUser = lazy(() => import('./GoUser'))
const GoDoctor = lazy(() => import('./GoDoctor'))
const DoctorProfile = lazy(() => import('./components/DoctorProfile'))
const DoctorAppoint = lazy(() => import('./components/DoctorAppoint'))
const UserApointments = lazy(() => import('./components/UserApointments'))
const BookAppointemt = lazy(() => import('./components/BookAppointemt'))
const Doctordetails = lazy(() => import('./components/Doctordetails'))
const Userprofile = lazy(() => import('./components/Userprofile'))
const ShowAppointment = lazy(() => import('./components/ShowAppointment'))
const Step1 = lazy(() => import('./components/Step1'))
const CompletedSlot = lazy(() => import('./components/CompletedSlot'))
const ApplySucess = lazy(() => import('./components/ApplySucess'))
const Home = lazy(() => import('./Home'))
const DoctorLogin = lazy(() => import('./components/DoctorLogin'))
const DoctorRegister = lazy(() => import('./components/DoctorRegister'))
const UserLogin = lazy(() => import('./components/UserLogin'))
const UserRegistration = lazy(() => import('./components/UserRegistration'))
const UserHome = lazy(() => import('./components/UserHome'))
const DoctorHome = lazy(() => import('./components/DoctorHome'))
const Book = lazy(() => (import('./components/Book')))

export const context = createContext()

export default function App() {
  const localStorageuserdata = JSON.parse(localStorage.getItem('userdata'))
  const localStoragedoctordata = JSON.parse(localStorage.getItem('doctordata'))

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='userdashboard' element={<GoUser/>}></Route>
            <Route path='doctordashboard' element={<GoDoctor />}></Route>

            <Route path='doctorlogin' element={<DoctorLogin />} />
            <Route path='doctoregister' element={<DoctorRegister />} />
            <Route path='userlogin' element={<UserLogin />} />
            <Route path='useregister' element={<UserRegistration />} />
            <Route path='load' element={<Loader />} />



            <Route path='userhome' element={<context.Provider value={localStorageuserdata}>  <UserHome /></context.Provider>}>
              <Route index element={<Doctordetails />}></Route>
              <Route path='doctordetails' element={<Doctordetails />}> </Route>
              <Route path='profile' element={<Userprofile />}></Route>
              <Route path='myappointments' element={<UserApointments />}></Route>
            </Route>

            <Route path='doctorhome' element={<context.Provider value={localStoragedoctordata}><DoctorHome /></context.Provider>}>
              <Route path='userdetails' element={<ShowAppointment />}></Route>
              <Route index element={<ShowAppointment />}></Route>
              <Route path='profile' element={<DoctorProfile />}></Route>
              <Route path='appointments' element={<DoctorAppoint />}></Route>

            </Route>

            <Route path='confrimation' element={<Book />}></Route>
            <Route path='select' element={<BookAppointemt />}></Route>
            <Route path='step1' element={<Step1 />}></Route>
            <Route path='completedslot' element={<CompletedSlot />}></Route>
            <Route path='success' element={<ApplySucess />}></Route>
            <Route path='rescedule' element={<Rescedule/>}></Route>
         




          </Routes>
        </Suspense>
      </BrowserRouter>

    </>
  )
}
