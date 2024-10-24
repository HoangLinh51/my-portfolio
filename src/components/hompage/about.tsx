import React from 'react';
import aboutStyle from '@/styles/homepage/about.module.css';

const About: React.FC = () => {
  return (
    <div className={aboutStyle.header}>
      <div className={aboutStyle.title}>
        <h3>About</h3>
        <div className={aboutStyle.navigate}>
          <a href="">Resume</a>
          <a href="">Project</a>
        </div>
      </div>
      <p>
        My name is Lê Hoàng Linh, a graduate in Information Technology from British College BTEC FPT. I specialize in Frontend Web Development with Angular and am currently learning Backend development with NodeJS. I am passionate about technology and enjoy solving problems through coding.
      </p>
    </div>
  );
}


export default About;