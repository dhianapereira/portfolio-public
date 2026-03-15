import socialsContent from "@/data/socials.json";
import { SectionHeader } from "@/shared/components/SectionHeader";
import type { SocialsContent } from "@/shared/types/socials";
import { useTranslation } from "@/shared/useTranslation";
import { FeatherIcon } from "lucide-animated";

type ContactInfoProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
};

function ContactInfo({ icon, label, value }: Readonly<ContactInfoProps>) {
    let content: React.ReactNode = value;
    if (label.toLowerCase().includes("email")) {
        content = (
            <a
                href={`mailto:${value}`}
                className="text-black no-underline hover:text-blue-600 hover:underline cursor-pointer transition-colors"
            >
                {value}
            </a>
        );
    } else if (label.toLowerCase().includes("phone") || label.toLowerCase().includes("telefone")) {
        const phoneNumber = value.replaceAll(/\D/g, "");
        content = (
            <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black no-underline hover:text-green-600 hover:underline cursor-pointer transition-colors"
            >
                {value}
            </a>
        );
    }
    return (
        <div className="flex items-center gap-4 group">
            <div className="p-3 bg-zinc-100 rounded-2xl text-ink shrink-0">{icon}</div>
            <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-600">{label}</p>
                <p className="font-medium">{content}</p>
            </div>
        </div>
    );
}

export default function Contact() {
    const { t, language } = useTranslation();
    const socials = socialsContent as SocialsContent;

    return (
        <section id="contact" className="scroll-mt-24">
            <SectionHeader title="contact" number="07" />
            <div className="mt-8 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-16">
                <div className="space-y-8">
                    <h2 className="text-5xl font-bold tracking-tighter">
                        {t("contactMe") === "Contact" ? "Let's build something " : "Vamos construir algo "}
                        <br />
                        {t("contactMe") === "Contact" ? "great together." : "incrível juntos."}
                    </h2>
                    <p className="text-gray-600 text-xl max-w-md leading-relaxed">
                        {t("contactMe") === "Contact"
                            ? "Currently open to new opportunities and interesting projects. Feel free to reach out!"
                            : "Aberto a novas oportunidades e projetos interessantes. Sinta-se à vontade para entrar em contato!"}
                    </p>
                    <div className="space-y-4">
                        <ContactInfo
                            icon={<FeatherIcon size={20} />}
                            label={socials.email.label[language] || t("email")}
                            value={socials.email.value}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
