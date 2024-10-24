import styles from "../styles/Home.module.css";
import 'primeicons/primeicons.css';
import About from "./components/hompage/about";
import Profile from "./components/hompage/profile";
import Skills from "./components/hompage/skill";

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


// const function Skills: React.FC = () => {

//   const items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
//   const elements: JSX.Element[] = [];

//   // Sử dụng vòng lặp for để tạo các phần tử JSX
//   for (let i = 0; i < items.length; i++) {
//     elements.push(<li key={i}>{items[i]}</li>);
//   }
//   return (
//     <div>{elements}</div>
//   );
// }
// <section className={styles.skills}>
//   <h3>What I am doing</h3>
//   <div className={styles.skillGrid}>
//     <SkillCard
//       title="Frontend Development"
//       description="Build SPA using React.js, HTML, and CSS."
//     />
//     <SkillCard
//       title="Backend Development"
//       description="Handle database, server using Express."
//     />
//   </div>
// </section>

// function SkillCard({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) {
//   return (
//     <div className={styles.skillCard}>
//       <h4>{title}</h4>
//       <p>{description}</p>
//     </div>
//   );
// }
