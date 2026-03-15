import experiences from "@/data/experiences.json";
import ExperienceItem from "@/shared/components/ExperienceItem";
import { SectionHeader } from "@/shared/components/SectionHeader";
import type { ExperienceEntry } from "@/shared/types/experience";
import { useTranslation } from "@/shared/useTranslation";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.55,
            ease: "easeOut" as const,
            staggerChildren: 0.12,
        },
    },
};

const headerVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const timelineVariants: Variants = {
    hidden: { scaleY: 0, opacity: 0 },
    show: {
        scaleY: 1,
        opacity: 1,
        transition: { duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export default function ExperienceSection() {
    const { language } = useTranslation();
    const experienceEntries = experiences as ExperienceEntry[];

    return (
        <motion.section
            id="experience"
            className="relative space-y-16 scroll-mt-24"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            variants={sectionVariants}
            key={language}
        >
            <SectionHeader title="Experience" number="01" />
            <motion.div variants={headerVariants} className="relative space-y-16 pt-8 md:space-y-20 md:pt-10">
                <motion.span
                    variants={timelineVariants}
                    className="absolute top-10 bottom-12 left-52 hidden w-px origin-top bg-linear-to-b from-black/25 via-black/18 to-black/8 md:block"
                />
                {experienceEntries.map((experience) => (
                    <ExperienceItem
                        key={`${experience.company}-${experience.period.en}`}
                        company={experience.company}
                        role={experience.role[language]}
                        period={experience.period[language]}
                        description={[...experience.description[language]]}
                    />
                ))}
            </motion.div>
        </motion.section>
    );
}
