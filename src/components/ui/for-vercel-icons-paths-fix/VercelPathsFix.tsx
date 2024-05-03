import coffeeImg1 from '../../../assets/images/coffee/Image1.png'
import coffeeImg2 from '../../../assets/images/coffee/Image2.png'
import coffeeImg3 from '../../../assets/images/coffee/Image3.png'
import coffeeImg4 from '../../../assets/images/coffee/Image4.png'
import coffeeImg5 from '../../../assets/images/coffee/Image5.png'
import coffeeImg6 from '../../../assets/images/coffee/Image6.png'
import coffeeImg7 from '../../../assets/images/coffee/Image7.png'
import coffeeImg8 from '../../../assets/images/coffee/Image8.png'
import coffeeImg9 from '../../../assets/images/coffee/Image9.png'
import coffeeImg10 from '../../../assets/images/coffee/Image10.png'
import coffeeImg11 from '../../../assets/images/coffee/Image11.png'
import coffeeImg12 from '../../../assets/images/coffee/Image12.png'

/* this component is needed so that pictures whose paths are on
 the server are loaded into the final deploy version */
const VercelPathsFix = () => {
  return (
    <>
      <img src={coffeeImg1} alt="coffee png" />
      <img src={coffeeImg2} alt="coffee png" />
      <img src={coffeeImg3} alt="coffee png" />
      <img src={coffeeImg4} alt="coffee png" />
      <img src={coffeeImg5} alt="coffee png" />
      <img src={coffeeImg6} alt="coffee png" />
      <img src={coffeeImg7} alt="coffee png" />
      <img src={coffeeImg8} alt="coffee png" />
      <img src={coffeeImg9} alt="coffee png" />
      <img src={coffeeImg10} alt="coffee png" />
      <img src={coffeeImg11} alt="coffee png" />
      <img src={coffeeImg12} alt="coffee png" />
    </>
  )
}

export default VercelPathsFix