import AboutPage from "@/features/about/components/AboutPage";
import PortfolioClient from "@/features/shared/portfolio/PortfolioClient";
import { getAbout, getProjects } from "@/features/works/lib/portfolioData";

export default async function Home() {
  const projects = await getProjects();
  const about = await getAbout();

  return <PortfolioClient initialProjects={projects} initialAbout={about} />;
}