import React, { useState } from 'react'

function ContactUsContent(props) {
  const [fname , setFname] = useState("");
  const [lastName , setLastname] = useState("");
  const [object , setObject] = useState("");
  const [email , setEmail] = useState("");
  const [message , setMessage] = useState("");

  console.log(fname , lastName , object , email , message);


  return (
    <div>
      <div className='row d-flex'>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-5 pe-5 d-flex flex-column boxRight'>
          <span className='fs-5 text-light  adressItem pt-5 mt-3'>
            <i className='bi-house-fill fs-5 text-primary ps-3 icons'></i>
            آدرس : تهران - میدان انقلاب - خیابان کارگر جنوبی - پلاک954 - واحد 2</span>
          <span className='fs-5 text-light pt-5 mt-3'>
            <i className='bi-telephone-fill fs-5 text-primary ps-3 icons'></i>
            تلفن : 09226121009</span>
          <span className='fs-5 text-light pt-5'>
            <i className='bi-envelope-fill fs-5 text-primary ps-3 icons'></i>
            آدرس ایمیل : Cipherwhalemanegment@Gmail.com</span>
          <span className='fs-5 text-light pt-5'>
            <i className='bi-share-fill fs-5 text-primary ps-3 icons'></i>
            ما را در شبکه های مجازی دنبال کنید :</span>
          <span className='fs-5 text-light pt-5 pe-5 me-3 pb-5 '>
            <a href='#'><i className='bi-instagram fs-5 text-primary ps-5 social'></i></a>
            <a href='#'><i className='bi-whatsapp fs-5 text-primary ps-5 social'></i></a>
            <a href='#'><i className='bi-linkedin fs-5 text-primary ps-5 social'></i></a>
            <a href='#'><i className='bi-youtube fs-5 text-primary ps-5 social'></i></a>
          </span>
        </div>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-5  ps-5 justify-content-between'>
          <form>
            <h4 className='text-center text-primary'>ارسال پیام</h4>
            <div className='d-flex flex-wrap justify-content-between mt-5 containerInput pe-3'>
              <input type="text" placeholder="نام" name='نام' className="p-3 input" onChange={e => setFname(e.target.value)} />
              <input type="text" placeholder="نام خانوادگی" name='نام خانوادگی' className="p-3 input" onChange={e => setLastname(e.target.value)} />
              <input type="text" placeholder="موضوع" name='موضوع' className="p-3 input secondInput" onChange={e => setObject(e.target.value)} />
              <input type="email" placeholder="آدرس ایمیل" name='آدرس ایمیل' className="p-3 input secondInput" onChange={e => setEmail(e.target.value)} />
              <textarea className='textarea mt-3 p-3' placeholder='متن پیام' onChange={e => setMessage(e.target.value)} />
              <div className='w-100 d-flex justify-content-center contentBtn'>
                  <a href='#' className='btn btn-primary mt-5 p-3 sendMessage'>ارسال پیام</a>
              </div>
            </div>
          </form>
        </div>
   
      </div>
    </div>
  )
}

export default ContactUsContent