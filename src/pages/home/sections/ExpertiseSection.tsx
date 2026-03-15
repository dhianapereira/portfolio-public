import expertise from "@/data/expertise.json";
import { SectionHeader } from "@/shared/components/SectionHeader";
import SkillCard from "@/shared/components/SkillCard";
import type { ExpertiseGroup } from "@/shared/types/expertise";
import { useTranslation } from "@/shared/useTranslation";
import type { ReactNode } from "react";
import { Code2, Cpu, Database, Layers } from "lucide-react";

type GroupIconName = "code2" | "layers" | "database" | "cpu";

export default function Expertise() {
    const { language } = useTranslation();
    const expertiseGroups = expertise as ExpertiseGroup[];
    const iconMap: Record<GroupIconName, ReactNode> = {
        code2: <Code2 size={14} />,
        cpu: <Cpu size={14} />,
        database: <Database size={14} />,
        layers: <Layers size={14} />,
    };
    const groupIconMap: Record<ExpertiseGroup["id"], GroupIconName> = {
        languages: "code2",
        frameworks: "layers",
        databases: "database",
        tools: "cpu",
    };

    return (
        <section id="expertise" className="space-y-16 scroll-mt-24" key={language}>
            <SectionHeader title="Expertise" number="04" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                {expertiseGroups.map((group) => (
                    <SkillCard
                        key={group.title.en}
                        icon={
                            groupIconMap[group.id] && (
                                <span className="inline-flex">{iconMap[groupIconMap[group.id]]}</span>
                            )
                        }
                        title={group.title[language]}
                        skills={group.skills}
                    />
                ))}
            </div>
        </section>
    );
}
