import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import './Home.css'
import HomeNavbar from './HomeNavbar'
import Slider from "react-slick";
import baner2 from './images/banner2.webp'
import baner3 from './images/banner1.webp'
import aboutimg from './images/aboutdoctor.jpeg'
import hairskin from './images/hairskin.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useRef } from 'react'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        right: '50px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: "#fff4",
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        zIndex: 1, // Ensure the arrows are above other elements
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClick}
    >
      <span>Next</span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        left: '50px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: '#fff4',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClick}
    >
      <span>Prev</span>
    </div>
  );
}

export default function Home() {

  const navigate = useNavigate()

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings1 = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
      }
    ]

  };

  const [data, setdata] = useState([
    {
      url: './images/Acne-Treatment.webp',
      title: 'Acne Treatment',
      body: 'Our wide range of acne and acne scar treatments ensures the clearance of pimples and the deep scars they leave behind, resulting in clearer and smoother skin.'
    },
    {
      url: './images/Laser-Hair.webp',
      title: 'Laser Hair Removal',
      body: 'VCare’s Cool Laser Hair Removal uses triple wavelength laser energy which reduces treatment time and maximises effectiveness while providing a cooling effect on the skin.'
    },
    {
      url: './images/Anti-Ageing.webp',
      title: 'Anti-ageing Treatment',
      body: 'Our anti-ageing treatments are designed to diminish signs of ageing, such as wrinkles and fine lines, while rejuvenating the skin for a youthful appearance.'
    },
    {
      url: './images/dull-skin.webp',
      title: 'Dull Skin Treatment',
      body: 'VCare’s dull skin treatment is specifically formulated to exfoliate and remove dull, lifeless skin cells to promote a brighter and more even complexion.'
    },
    {
      url: './images/skin-whitening.webp',
      title: 'Skin Whitening Treatment',
      body: 'Our skin whitening treatment effectively targets, diminishes dark spots and pigmentation. It promotes an even skin tone and results in visibly brighter skin.'
    },
    {
      url: './images/Wart-Removal.webp',
      title: 'Wart Removal Treatment',
      body: 'VCares laser technology for wart removal provides a painless procedure that targets affected areas, eliminating warts while preserving surrounding skin cells.'
    },
  ])

  return (

    <>

      <HomeNavbar />
      <div className='part-1 pt-5 mt-0 mb-0 pb-0' style={{backgroundColor:'#FFFFFF'}}>
        <div className="slider-container" >
          <Slider {...settings1}>
            <div className='banner-div'>
              <img src={baner2} alt="banner-1" className='banner-imgs' />
            </div>
            <div className='banner-div'>
              <img src={baner3} alt="banner-2" className='banner-imgs' />
            </div>
          </Slider>
        </div>
      </div>


      <div className='grid-main-in-about '>
        <div className='grid-inner-in-about row container m-auto pt-5'>
          <div className="grid-columns-in-about col-md-6">
            <img src={aboutimg} alt="" className='about-image' />
          </div>
          <div className="grid-columns-in-about col-md-6">
            <h2 style={{ color: 'rgb(18, 18, 156)' }}>India's No.1 Hair and Skin Clinic </h2>
            <ul className='about-points text-secondary fs-8'>
              <li> &nbsp; VCare, the most trusted hair and skin clinic in India, is led by Mrs. Carolin Praba Reddy,
                renowned as one of India's top 10 leading trichologists. Our team comprises certified trichologists
                and experts in haircare and skincare, equipped with cutting-edge facilities and technologies spanning
                South India.</li>
              <li>  &nbsp; At VCare, our treatments and products are crafted in-house
                to ensure unparalleled service quality. Our signature treatments are our innovative 
                non-surgical solutions which can cater to a wide range of concerns.
              </li>
              <li> &nbsp; Our vast clientele exceeding 1.5 million, encompassing celebrities, athletes, and 
              entrepreneurs, stands as a testament to our commitment. We take pride in making a meaningful 
              difference in the lives of many by addressing their hair and skin concerns with utmost care 
              and dedication.

              </li>
              <li > &nbsp; Join us today and experience the transformative touch of VCare.
              </li>
            </ul>
            <div className='pb-3'>
            <Button variant='contained' style={{ backgroundColor: 'rgb(18, 18, 156)' }}> get Free Consultation</Button>
          </div>
          </div>
        </div>
      </div>


      <div className='fixed-image' id='' >
        <div className='fixed-image-inner'>
          <h1 className='text-center'>You Are Just One Click Away From A Personalised Consultation With Our Team Of Highly Qualified Experts.        </h1>
          <div className='contact-from-div container'>
            <div><input type="text" placeholder='Enter Your Name' className='p-3 mt-2 w-100' /></div>
            <div><input type="text" placeholder='Enter Your Phone Number' className='p-3 mt-2 w-100' /></div>
            <div >
              <section  >
                <select className='p-3 mt-2 w-100'>
                  <option value="" selected>Select Your Locaiton</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="guntur">Guntur</option>
                  <option value="narasaraopet">Narasaraopet</option>
                  <option value="vijaywada">Vijayawada</option>
                </select>
              </section>
            </div>
          </div>
          <div>
            <input type="checkbox" name="rule" id="rule" className='form-check-input mt-2' checked />
            <label htmlFor="rule" className='mt-1 ms-2 text-secondary'> I agree to the VCare Terms of Service and <a href=""> Privacy Policy</a> </label>
          </div>
          <div>
            <Button variant='contained' className=' p-3 mt-3' style={{ backgroundColor: 'rgb(18, 18, 156)' }} fullWidth>Submit</Button>
          </div>
        </div>
      </div>

      <div className='grid-main-in-about '>
        <div className='grid-inner-in-about row container m-auto pt-5'>
        <h2 style={{ color: 'rgb(18, 18, 156)' }} className='text-center mb-5'>Our 360° approach takes care ofyou beyond treatments</h2>

          <div className="grid-columns-in-about col-md-6">
            <ul className='about-points text-secondary fs-8'>
              <li> &nbsp; VCare, the most trusted hair and skin clinic in India, is led by Mrs. Carolin Praba Reddy,
                renowned as one of India's top 10 leading trichologists. Our team comprises certified trichologists
                and experts in haircare and skincare, equipped with cutting-edge facilities and technologies spanning
                South India.</li>
              <li>  &nbsp; At VCare, our treatments and products are crafted in-house
                to ensure unparalleled service quality. Our signature treatments are our innovative 
                non-surgical solutions which can cater to a wide range of concerns.
              </li>
              <li> &nbsp; Our vast clientele exceeding 1.5 million, encompassing celebrities, athletes, and 
              entrepreneurs, stands as a testament to our commitment. We take pride in making a meaningful 
              difference in the lives of many by addressing their hair and skin concerns with utmost care 
              and dedication.

              </li>
              <li > &nbsp; Join us today and experience the transformative touch of VCare.
              </li>
            </ul>
            <div className='pb-3'>
            <Button variant='contained' style={{ backgroundColor: 'rgb(18, 18, 156)' }}> get Free Consultation</Button>
          </div>
          </div>
          <div className="grid-columns-in- col-md-6">
            <img src={hairskin} alt="" className='about-image shadow' />
          </div>  
        </div>
      </div>

      <div className='card-bg' id='treatment'>

        <div className="slider-container container slids ">
          <h1 className='text-center mb-5' style={{ color: 'blue' }}>Skin Treatments</h1>

          <Slider {...settings}>
            {data.map((data, index) => (
              <div key={index} className='card-main'>
                <Card className='card-size'>
                  <CardActionArea>
                    <img src={require(`${data.url}`)} alt="" className='home-image-in-slides' />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                </Card>
              </div>
            ))}

          </Slider>
        </div>
      </div>

      <div className='part-2'>
        <h1 className='part-2-head'>Why Trust VCare for Your Skin and Hair Needs? </h1>
        <div className='container part-2-inner'>
          <div> <span><HorizontalRuleIcon /></span> Personalised Treatment Plan  </div>
          <div> <span><HorizontalRuleIcon /></span> Scientifically Proven Treatments </div>
          <div><span><HorizontalRuleIcon /></span>  Post-treatment Homecare</div>
          <div> <span><HorizontalRuleIcon /></span> Dietary & Lifestyle Corrections  </div>
        </div>
      </div>

      
      <div className='card-bg' id='treatment'>

        <div className="slider-container container slids ">
          <h1 className='text-center mb-5' style={{ color: 'blue' }}>Hair Treatments</h1>
          <Slider {...settings}  ref={slider => {  sliderRef = slider; }}>
            {data.map((data, index) => (
              <div key={index} className='card-main'>
                <Card className='card-size'>
                  <CardActionArea>
                    <img src={require(`${data.url}`)} alt="" className='home-image-in-slides' />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                </Card>
              </div>
            ))}

          </Slider>
          <div className='text-center mt-5'>
        <button className="button btn btn-dark me-4" onClick={previous}>
          Previous
        </button>
        <button className="button btn btn-dark" onClick={next}>
          Next
        </button>
      </div>
        </div>
      </div>

      <div className='accordian-div' id='faq'>
        <div className="accordion accordion-flush accordian-inner container" id="accordionFlushExample">
          <h1 className='text-center  mb-4' style={{ color: 'blue' }}>Frequently Asked Questions</h1>
          <div className="accordion-item mt-2">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                How many sessions does it take to regrow hair?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                This depends on the individual, the root cause of the hair issue and the severity of the problem. With VCare’s treatments, it is possible to expect good results within 6 to 8 sessions. However, if the hair issue is very serious, additional sessions might be required.
              </div>
            </div>
          </div>
          <div className="accordion-item mt-2">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                What is the best treatment for acne scars?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                VCare has a wide range of treatments that work well in reversing your acne scars. Our microneedling, green peel, chemical peels and laser treatments are the best treatments for acne scars.
              </div>
            </div>
          </div>
          <div className="accordion-item mt-2">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Can hair loss be a sign of something serious?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Hair loss can sometimes be a sign of underlying health issues or conditions. It can be associated with medical conditions such as thyroid disorders, hormonal imbalances, autoimmune diseases, nutritional deficiencies, and scalp infections
              </div>
            </div>
          </div>
          <div className="accordion-item mt-2">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapseThree">

                How to treat dark spots?

              </button>
            </h2>
            <div id="flush-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">

                Dark spots can be treated by various treatments at VCare like Melano Break, Ultra-whitening Therapy, facial peels and carbon laser peel.

              </div>
            </div>
          </div>
          <div className="accordion-item mt-2">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapseThree">

                What is the main cause of dandruff?

              </button>
            </h2>
            <div id="flush-collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">

                One of the primary reasons for dandruff is the overgrowth of a yeast-like fungus. Other factors contributing to dandruff include dry skin, sensitivity to hair care products, hormonal changes, certain medical conditions, and poor hygiene.

              </div>
            </div>
          </div>
          <div className="accordion-item mt-2">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapseThree">

                Is skin whitening treatment permanent?

              </button>
            </h2>
            <div id="flush-collapsesix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">

                While the results of our skin whitening treatments are not permanent, they offer long-lasting outcomes that can be maintained if proper aftercare, as instructed by our skin care experts, is followed.

              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="home-footer bg-dark  p-2">
        <Typography className='text-center'>Copyright &copy; 2024, Vcare. All Right Reserved</Typography>
      </div>

      <div>

      </div>
    </>
  )
}
