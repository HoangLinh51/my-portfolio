import React from 'react';
import profileStyle from '@/styles/homepage/profile.module.css';
import { Image } from 'primereact/image';

const Profile: React.FC = () => {
  return (
    <div className={profileStyle.profile}>
      <div className={profileStyle.profileImg}>
        <Image src="/profile.jpg" alt="Profile" width="150" height="150" className="boder-radius: 50%" preview />
      </div>
      <h1>Lê Hoàng Linh</h1>
      <div className={profileStyle.button}>Web Developer</div>
      <div className={profileStyle.button}><i className="pi pi-file-pdf"></i> Download Resume</div>
      <div className={profileStyle.socials}>
        <a href=""></a>
        <i className="pi pi-facebook"></i>
        <i className="pi pi-github"></i>
        <i className="pi pi-linkedin"></i>
      </div>

      <div className={profileStyle.infomore}>
        <p><i className="pi pi-map-marker"></i> Duy Phước, Duy Xuyên, Quảng Nam</p>
        <p>linhle5112002@gmail.com</p>
        <p>+84 366 914 249</p>
      </div>

      <div className={profileStyle.email}>
        Email me
      </div>
    </div>
  );
};

export default Profile;