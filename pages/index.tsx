import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
}



const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap snap-y snap-mandatory overflow-y-scroll oveflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            <Head>
                <title>Nathan - Portofolio</title>
            </Head>

            {/* Header */}
            <Header socials={socials} />

            {/* Hero */}
            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo}/>
            </section>

            {/* About */}
            <section id="about" className="snap-center">
                <About pageInfo={pageInfo}/>
            </section>

            {/* Experience */}
            <section id="experience" className="snap-center">
                <WorkExperience experiences={experiences} />
            </section>

            {/* Skill */}
            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>

            {/* Projects */}
            <section id="projects" className="snap-start">
                <Projects projects={projects} />
            </section>

            {/* Contact Me */}
            <section id="contact" className="snap-start">
                <ContactMe />
            </section>

            <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                        <img src="https://i.imgur.com/HnTFijX.png" alt="arcuid"  className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-cover object-top" />
                    </div>
                </footer>
            </Link>
        </div>
    );
};

export default Home;


export const getStaticProps: GetStaticProps<Props> = async() => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocial();

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials
        },

        revalidate: 10
    }
}