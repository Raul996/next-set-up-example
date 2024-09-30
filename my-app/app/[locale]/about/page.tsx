import initTranslations from "@/app/i18n";
import styles from "./page.module.scss";
import Link from "next/link";

type AboutProps = {
  params: {
    locale: string;
  };
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ro" }];
}

export async function generateMetadata({ params: { locale } }: AboutProps) {
  const { t } = await initTranslations(locale, ["about", "home"]);

  return {
    title: t("metatitle"),
  };
}

const About = async ({ params: { locale } }: AboutProps) => {
  const { t } = await initTranslations(locale, ["about"]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{t("title")}</h1>
      <p className={styles.aboutText}>{t("greating")}</p>
      <p className={styles.aboutText}>{t("message")}</p>
      <p className={styles.aboutText}>{t("skills")}</p>
      <p className={styles.aboutText}>{t("address")}</p>

      <div className={styles.devider} />
      <Link className={styles.link} href={`/${locale}/`}>
        {t("home:home")}
      </Link>
    </div>
  );
};

export default About;
