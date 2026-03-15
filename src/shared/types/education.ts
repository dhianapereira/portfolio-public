type LocalizedText = {
    pt: string;
    en: string;
};

export type EducationEntry = {
    course: LocalizedText;
    institution: string;
    period: LocalizedText;
};

export type LanguageEntry = {
    name: string;
    level: string;
    color: string;
};

export type EducationContent = {
    education: EducationEntry[];
    languages: LanguageEntry[];
};
