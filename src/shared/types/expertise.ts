type LocalizedText = {
    pt: string;
    en: string;
};

export type ExpertiseSkill = {
    name: string;
    color: string;
};

export type ExpertiseGroup = {
    id: "languages" | "frameworks" | "databases" | "tools";
    title: LocalizedText;
    skills: ExpertiseSkill[];
};
