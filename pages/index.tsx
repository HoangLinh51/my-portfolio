import styles from "../styles/Home.module.css";
import { Image } from 'primereact/image';
import 'primeicons/primeicons.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Profile />
      </div>
      <div className={styles.mainContent}>
        <About />
        <Skills />
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className={styles.profile}>
      <Image src="/profile.jpg" alt="Profile" imageClassName={styles.profileImg} />
      <h1>Lê Hoàng Linh</h1>
      <div className={styles.button}>Web Developer</div>
      <div className={styles.button}><i className="pi pi-file-pdf"></i> Download Resume</div>
      <div className={styles.socials}>
        <i className="pi pi-facebook" style={{ fontSize: '32px' }}></i>
        <i className="pi pi-github" style={{ fontSize: '32px' }}></i>
        <i className="pi pi-linkedin" style={{ fontSize: '32px' }}></i>
      </div>

      <div className={styles.infomore}>
        <div className={styles.address}>
          <i className="pi pi-map-marker"></i> Duy Phước, Duy Xuyên, Quảng Nam
        </div>
        <div className={styles.email}>
          linhle5112002@gmail.com
        </div>
        <div className={styles.phone}>
          +84 366 914 249
        </div>
      </div>

      <div className={styles.changeUi}>
        Light UI
      </div>
    </div>
  );
}

function About() {
  return (
    <section className={styles.about}>
      <h3>About</h3>
      <p>
        I am currently pursuing a B.Tech degree in Computer Science and have 3+
        years of web development experience.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section className={styles.skills}>
      <h3>What I am doing</h3>
      <div className={styles.skillGrid}>
        <SkillCard
          title="Frontend Development"
          description="Build SPA using React.js, HTML, and CSS."
        />
        <SkillCard
          title="Backend Development"
          description="Handle database, server using Express."
        />
      </div>
    </section>
  );
}

function SkillCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles.skillCard}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
