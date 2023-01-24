import React from 'react'

function FreeEducationBanner() {
    return (
        <div>
            <div className='w-100 bg-danger mt-5 d-flex flex-column align-items-center justify-content-center position-relative banner'>
                <div className='overlayeCover'></div>
                <h4 className='position-absolute text-light fs-1 bannerTitle'>همین امروز شروع کنید !</h4>
                <p className='text-light position-absolute fs-5 bannerText'>حساب را به صورت رایگان باز کنید و شروع به خرید و فروش ارز دیجیتال کنید</p>
                <a href='#' className='bg-button p-3 bg-secondary text-light'>اکنون ثبت نام کنید</a>
            </div>
        </div>
    )
}

export default FreeEducationBanner