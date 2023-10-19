import { Form } from './style'
import { FormDiv } from './style'
import { HeroTitle } from './style'

const Hero = () => (
  <form className={Form.form}>
    <div className={FormDiv.container}>
      <h2 className={HeroTitle.heroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </h2>
    </div>
  </form>
)

export default Hero
