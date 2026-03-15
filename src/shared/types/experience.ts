type LocalizedText = {
    pt: string;
    en: string;
};

type LocalizedList = {
    pt: string[];
    en: string[];
};

export type ExperienceEntry = {
    company: string;
    role: LocalizedText;
    period: LocalizedText;
    description: LocalizedList;
};
