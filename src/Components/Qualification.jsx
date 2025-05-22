import React from 'react'
// import isc  from '../assets/isc.png'
import log01 from '../assets/log01.png'
import qw from '../assets/qw.png'



const Qualification = (props) => {
  return (
    <div>
<div className="container mt-5 pt-5 " style={{backgroundColor: props.mode=== 'dark'? '#000000':'white',color:props.mode=== 'dark'? 'white':'black'}}  >
<div className="row text-center text-center mb-5">
    <h2 className='fw-bold fs-2 '>My Eduaction</h2>
    <p>Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.</p>
  </div>
<div className="row row-cols-1 row-cols-lg-2 text-center g-4">
<div className="col  " >
<div class="card card2 p-3" style={{backgroundColor: props.mode=== 'dark'? '#000814':'white',color:props.mode=== 'dark'? 'white':'black', border:"1.5px solid ",borderRadius:"5px",borderColor: props.mode === 'dark' ? 'white' : '#000000'}}>
  <img src={log01} class="mx-auto" width={"200px !important"} alt="..."/>
  <div class="card-body">
  <h4 className="card-title fs-2">Bachelor of Computer Applications</h4>
        <h2 className="card-text fs-4 fw-semibold">GRD Institute of Management & Technology </h2>
        {/* <h2 className="card-text fs-4 fw-bold">ISC Board</h2>
        <p className="card-text fs-4 fw-semibold mb-0">89.80 %</p> */}
        <p className='fs-5 fs-semibold'>2024-2027</p>
  </div>
</div>




</div>

{/*  */}

<div className="col  " >
<div class="card card2 p-2" style={{backgroundColor: props.mode=== 'dark'? '#000814':'white',color:props.mode=== 'dark'? 'white':'black', border:"1.5px solid ",borderRadius:"5px",borderColor: props.mode === 'dark' ? 'white' : '#000000'}}>
  <img src={qw} class="mx-auto" width={"200px !important"} alt="..."/>
  <div class="card-body">
  <h4 className="card-title fs-2">Class 12 <sup>th</sup></h4>
        <h2 className="card-text fs-4 fw-semibold">Constancia School</h2>
        <h2 className="card-text fs-4 fw-semibold">ISC Board</h2>
        <p className="card-text fs-4 fw-semibold mb-0">89.8%</p>
        <p className='fs-5 fs-semibold'>2020-2022</p>
  </div>
</div>




</div>

</div>


</div>


    </div>
  )
}

export default Qualification