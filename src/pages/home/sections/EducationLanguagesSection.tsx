import educationContent from "@/data/education.json";
import { SectionHeader } from "@/shared/components/SectionHeader";
import type { EducationContent } from "@/shared/types/education";
import { useTranslation } from "@/shared/useTranslation";
import { motion } from "motion/react";

export default function EducationLanguage() {
    const { language } = useTranslation();
    const { education, languages } = educationContent as EducationContent;

    const hasLanguages = languages.length > 0;

    return (
        <section
            id="education"
            key={language}
            className={`grid grid-cols-1 ${hasLanguages ? "md:grid-cols-2 gap-x-24" : ""} gap-y-12`}
        >
            <div className="space-y-10">
                <SectionHeader title="Education" number="05" />

                {education.map((item) => (
                    <div key={`${item.institution}-${item.course.en}`} className="flex flex-col gap-2 border-l-2 border-ink pl-6">
                        <h3 className="text-2xl font-bold">{item.course[language]}</h3>

                        <p className="text-gray-500 text-lg">{item.institution}</p>

                        <p className="text-sm font-mono bg-zinc-100 inline-block px-2 py-1 rounded mt-1">
                            {item.period[language]}
                        </p>
                    </div>
                ))}
            </div>

            {hasLanguages && (
                <div className="space-y-10">
                    <SectionHeader title="Languages" number="06" />

                    <div className="flex flex-col gap-4">
                        {languages.map((lang, i) => (
                            <motion.div
                                key={lang.name}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: i * 0.12,
                                    ease: "easeOut",
                                }}
                                whileHover="cardHover"
                                className="flex items-center justify-between px-6 py-4 border border-border rounded-2xl bg-white cursor-default transition-[border-color,box-shadow] duration-200 hover:border-ink hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.10)]"
                            >
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        variants={{
                                            cardHover: {
                                                scale: [1, 1.5, 1, 1.3, 1],
                                                transition: {
                                                    duration: 0.45,
                                                    ease: "easeInOut",
                                                },
                                            },
                                        }}
                                        className="w-3 h-3 rounded-full"
                                        style={{
                                            backgroundColor: lang.color,
                                        }}
                                    />

                                    <span className="font-bold text-lg">{lang.name}</span>
                                </div>

                                <span className="text-sm font-mono font-semibold" style={{ color: lang.color }}>
                                    {lang.level}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
