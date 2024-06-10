import "./Main.css";
function Main() {
  return (
    <>
      <section className="firest">
        <h1 id="title">خطوات التسجيل</h1>

        <div className="steps">
          <div className="step">
            <div className="icon-container">
              <img src="https://tuwaiqdev.com/img/course-step-1.svg" alt="Step 1" />
            </div>
            <p>الانضمام إلى المنصة</p>
          </div>

          <div className="step">
            <div className="icon-container">
              <img src="https://tuwaiqdev.com/img/course-step-2.svg" alt="Step 2" />
            </div>
            <p>التسجيل في المعسكر أو البرامج</p>
          </div>

          <div className="step">
            <div className="icon-container">
              <img src="https://tuwaiqdev.com/img/course-step-3.svg" alt="Step 3" />
            </div>
            <p>انتظار رسالة القبول</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;

