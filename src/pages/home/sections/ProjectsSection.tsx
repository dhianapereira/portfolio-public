import { fetchRecentRepositories, type GitHubRepository } from "@/lib/github";
import ProjectCard from "@/shared/components/ProjectCard";
import { SectionHeader } from "@/shared/components/SectionHeader";
import { useTranslation } from "@/shared/useTranslation";
import { motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.08,
        },
    },
};

export default function ProjectsSection() {
    const { t } = useTranslation();
    const [projects, setProjects] = useState<GitHubRepository[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        let isMounted = true;

        async function loadRepositories() {
            try {
                setIsLoading(true);
                setHasError(false);

                const repositories = await fetchRecentRepositories();

                if (!isMounted) {
                    return;
                }

                setProjects(repositories);
            } catch {
                if (!isMounted) {
                    return;
                }

                setHasError(true);
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        loadRepositories();

        return () => {
            isMounted = false;
        };
    }, []);

    const content = hasError ? (
        <div className="rounded-[1.6rem] border border-dashed border-border px-6 py-10 text-center text-sm text-gray-600">
            {t("projectsError")}
        </div>
    ) : isLoading ? (
        <div className="rounded-[1.6rem] border border-dashed border-border px-6 py-10 text-center text-sm text-gray-600">
            {t("loadingProjects")}
        </div>
    ) : (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto grid max-w-full sm:max-w-4xl md:max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2"
        >
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.name}
                    description={project.description ?? t("noProjectDescription")}
                    tags={[...(project.language ? [project.language] : []), ...project.topics].slice(0, 5)}
                    link={project.homepage || project.html_url}
                />
            ))}
        </motion.div>
    );

    return (
        <section id="projects" className="space-y-12 sm:space-y-16 scroll-mt-24">
            <div className="px-4 sm:px-12 md:px-24">
                <SectionHeader title="Projects" number="02" />
            </div>

            <div className="px-4 sm:px-12 md:px-24">{content}</div>
        </section>
    );
}
