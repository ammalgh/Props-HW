import Nav from './Components/Nav'
import './App.css'
import Cardes from './Components/Cardes'
import Main from './Components/Main'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
     <Nav/>

    <div className='section'>

    <button  className="btnn1"  type='button'> الناشئون</button>
      <button   className="btnn2"  type='button'> الكبار </button>
      
      <h1>المعسكرات والبرامج </h1>
    </div>

    


    <section>
            <h2 className="program">المعسكرات والبرامج</h2>
            <div className="cards">
                <Cardes
                    type="برنامج"
                     description="إدارة خدمات تقنية المعلومات (ITL)"
                    location="الرياض "
                    duration="اسبوع واحد"
                    startDate="2024-06-23"
        
                />
                <Cardes
                    type="معسكر"
                    description="هندسه الحوسبة السحابية المتقدمة AWS"
                    location="الرياض "
                    duration="4أسابيع  "
                    startDate="2024-06-23"
                
                />
                <Cardes
                    type="لقاء"
                    description="فعالية WWDC24 Watch Party "
                    location="الرياض"
                    duration="يوم واحد"
                    startDate="2024-06-25"
                   
                 
                />
                <Cardes
                    type="لقاء"
                    description=" أساسيات علوم الشبكات"
                    location="الرياض"
                    duration="يوم واحد"
                    startDate="2023-05-25"
                  
                />
                <Cardes
                    type="معسكر"
                    description="أمن وحمايه المعلومات "
                    location="عن بعد"
                    duration="أسبوع واحد"
                    startDate="2023-05-19"
                  
                />
                <Cardes
                    type="برنامج"
                    description="حوكمه البيانات  "
                    location="عن بعد"
                    duration="أسبوعان"
                    startDate="2023-05-19"
                   
                />
            </div>
          
        </section>
        <div className='container'>
        <button  className='load'  type='button'>تحميل المزيد</button>
        </div>
  <Main/>

  <Footer/>

    </>
  )
}

export default App
