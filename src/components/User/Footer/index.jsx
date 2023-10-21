import { Link } from 'react-router-dom'
import './index.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'


const FOOTER = () => {
  return (
    <section className='main-foot' >
      <div className='footer'>
      <div className='contact-foot'>
        <h3 className='contact_title'>Əlaqə Məlumatları</h3>
        <ul className='contact-txt'>
          <li className='adres'><FontAwesomeIcon icon={faLocationDot}/> 
          Bakı şəhəri,Binəqədi rayonu,
          <br />
           Dərnəgül yaşayış sahəsi 3117
          </li>
          <li><FontAwesomeIcon icon={faPhone}/><a style={{color:'white'}}  href="tel:+994-50-555-25-50">+994 (50) 555 25 50</a></li> 
          <li><FontAwesomeIcon icon={faPhone}/><a style={{color:'white'}}  href="tel:+994-70-555-55-90">+994 (50) 555 25 50</a></li>  
          <li><FontAwesomeIcon icon={faEnvelope}/><a style={{textDecoration:'none',color:'white'}} href="mailto:laletech4@gmail.com">laletech4@gmail.com</a></li>
          <li><FacebookIcon style={{'width':'20px'}}/>
           <a style={{textDecoration:'none', color:'white'}} href="https://www.facebook.com/profile.php?id=100094357220772&mibextid=ZbWKwL">Laletech Mmc</a>
           </li>
          <li><InstagramIcon style={{'width':'20px'}}/>
           <a style={{textDecoration:'none', color:'white'}}  href="https://www.instagram.com/laletech.mmc/?igshid=MzRlODBiNWFlZA%3D%3D">laletech.mmc</a>
          </li>

        </ul>
      </div>


      <div  className='link-foot'>
        <h3 className='contact_title'>MƏHSULLARIMIZ</h3>
        <ul className='footlist'>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' to='/products/ekin-makina'>İnjeksion Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' to='/products/seri-makina'>Karton Qutu Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' to='/products/tur-var-makina'>Karton Köşəbənt Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' to='/products/ileri-makina'>Karton Qatlama Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' to='/products/soley-makina'>Kağız Klok Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' to='/products/aweta'>Çeşidləmə Makina</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' to='/products/ceylift'>Avtokar ElektroKar</Link>
      </li>
      <li>
          <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' to='/products/elave-mehsullar'>Karton Kleyi</Link>
      </li>
      <li>
        <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' to='/products/elave-mehsullar'>Rezin İp</Link>
      </li>
      <li>
        <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' to='/products/elave-mehsullar'>Meyvə Violu</Link>
      </li>
      <li>
        <Link onClick={()=>window.scrollTo(0, 0)} className='footLink' to='/products/karaduman-kalip'>Karaduman Kalip</Link>
      </li>
    </ul>
      </div>


      <div className='about-foot'>
        <h3 className='contact_title'>HAQQIMIZDA</h3>
        <p className='foot-about-content'>
        LALETECH-MMC şirkəti olaraq fəaliyyətimiz dünyada inkişaf edən texnologiyanın Kənd təsərrüfatının inkişafına tətbiqində mühəndislik etməkdir.
        Ölkə rəhbərliyinin Kənd Təssərrüfatına göstərdiyi böyük diqqət və dəstəyi nəticəsində kənd təsərrüufatı sahələri sürətlə genişlənir.
        Bu zaman kənd təsərrüfatının artım templərinə cavab verən, 
        effektivliyi təmin edəcək müasir texnika və texnologiyaların tətbiqinə zərurət yaranır
        Biz LALETECH-MMC şirkəti olaraq Layihələndirmə,müasir texnologiyanın araşdırılması, qurulması, istehsal prosesinin düzgün idarə olunması, Xammal təminatı və servis həyata Keçirməkdəyik.
        </p>
      </div>

      </div>
      <div className='copyright'>
          <p className='copyright-text'>Copyright © 2023 Laletech MMC. Created by <a style={{color:'red'}} href="https://www.linkedin.com/in/elchin-abuzarli-6769b427a/" target="_blank">Elchin Abuzarli</a></p>
        </div>
    </section>

  )
}

export default FOOTER
