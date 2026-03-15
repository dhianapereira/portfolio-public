type LocalizedText = {
    pt: string;
    en: string;
};

type HeroSummary = {
    beforeHighlightOne: string;
    highlightOne: string;
    betweenHighlights: string;
    highlightTwo: string;
};

export type HeroStat = {
    id: string;
    value: string;
    label: LocalizedText;
};

export type HeroContent = {
    location: LocalizedText;
    roleBadge: LocalizedText;
    eyebrow: LocalizedText;
    headline: {
        firstName: string;
        lastName: string;
    };
    summary: {
        pt: HeroSummary;
        en: HeroSummary;
    };
    photo: {
        url: string;
        alt: LocalizedText;
    };
    stats: HeroStat[];
};
