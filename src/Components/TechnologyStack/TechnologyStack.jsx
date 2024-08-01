import React from 'react'
import "./technology.css"
import javascript from "../../Images/JavaScript.png"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Bootstrap from "../../Images/Bootstrap.png"
import css from "../../Images/css.png"
import nextjs from "../../Images/nextjs.png"
import nuxt from "../../Images/nuxt.png"
import react from "../../Images/react.png"
import vue from "../../Images/vue.png"
import angular from "../../Images/angular.png"
import tailwind from "../../Images/tailwind.png"
import html from "../../Images/html.png"
import aipine from "../../Images/Alpine.png"
const TechnologyStack = () => {
  return (
    <div className='tech_stack_container cmn_radius paddingTopBottom paddingLeftRight'>
        <h3 className='cmn_heading'>Comprehensive Technology <br></br> Stack and Expertise</h3>
        <p className='cmn_paragraph tools_paragraph'>Showcasing our extensive range of advanced technologies and tools, expertly applied to deliver innovative and effective solutions for your projects.</p>
  

    <Tabs
      defaultActiveKey="frontend_technology"
      id="uncontrolled-tab-example"
      className="mb-3 technology_stack_tab"
    >
      <Tab eventKey="frontend_technology" title="Frontend Technology">
<ul className='frontend_technology_list'>
    <li>
        <div className='technology_content'>
            <img src={javascript}/>
        </div>
        <p>JavaScript</p>
    </li>

    <li>
        <div className='technology_content'>
            <img src={html}/>
        </div>
        <p>HTML</p>
    </li>
    <li>
        <div className='technology_content'>
            <img src={css}/>
        </div>
        <p>CSS</p>
    </li>
    <li>
        <div className='technology_content'>
            <img src={tailwind}/>
        </div>
        <p>Tailwind</p>
    </li>
    <li>
        <div className='technology_content'>
            <img src={Bootstrap}/>
        </div>
        <p>Bootstrap</p>
    </li>
    <li>
        <div className='technology_content'>
            <img src={react}/>
        </div>
        <p>React</p>
    </li>
    <li>
        <div className='technology_content'>
            <img src={vue}/>
        </div>
        <p>Vue</p>
    </li>
    <li>
        <div className='technology_content'>
            <img src={angular}/>
        </div>
        <p>Angular</p>
    </li>
    <li>
        <div className='technology_content'>
            <img src={nuxt}/>
        </div>
        <p>Nuxt</p>
    </li>
    
    <li>
        <div className='technology_content'>
            <img src={nextjs}/>
        </div>
        <p>Nextjs</p>
    </li>
    <li>
        <div className='technology_content'>
            <img src={aipine}/>
        </div>
        <p>Alpine</p>
    </li>
    
</ul>
      </Tab>
      <Tab eventKey="nocode" title="No-code">
        Tab content for Profile
      </Tab>
      <Tab eventKey="backend_technology" title="Backend Technology">
        Tab content for Profile
      </Tab>
      <Tab eventKey="mobile_technology" title="Mobile Technology">
        Tab content for Contact
      </Tab>
      <Tab eventKey="ui_ux_design" title="ui/ux Design">
        Tab content for Contact
      </Tab>
      <Tab eventKey="cloud_design" title="Cloud">
        Tab content for Contact
      </Tab>
      <Tab eventKey="database" title="Database">
        Tab content for Contact
      </Tab>
    </Tabs>
 
    </div>
  )
}

export default TechnologyStack