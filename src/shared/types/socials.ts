type LocalizedText = {
    pt: string;
    en: string;
};

export type SocialLink = {
    label: string;
    url: string;
    username: string;
};

export type ContactEmail = {
    label: LocalizedText;
    value: string;
};

export type SocialsContent = {
    github: SocialLink;
    linkedin: SocialLink;
    email: ContactEmail;
};
