

import { Container, Row, Col } from "reactstrap"
import "./hero-section.css";
import SearchIcon from '../assets/images/search.svg'
import heroImg from '../assets/images/hero-img1.png'

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>


          <Col lg='6' md='6'>
            <div className='hero_content'>
              <h1 className="mb-4">
                <span className='e-purple'>E</span>-Learning Anywhere <br/>In the world<br/>
              </h1>
              <p className='mb-4'>Discover the exciting world of technologies with our expertly crafted online courses.</p>

              <div className="search">
                <img src={SearchIcon} alt="search" />
                <input type="text" placeholder='what do you want to learn' />
                <button className='btn-search'>SEARCH COURSES</button>
              </div>

            </div>
          </Col>


          <Col lg='6' md='6'>
            <img src={heroImg} alt="" className='w-100' />
          </Col>


        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
