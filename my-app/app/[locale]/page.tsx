import Image from "next/image";
import initTranslations from "../i18n";
import Link from "next/link";
import styles from "./page.module.css";

type HomeProps = {
  params: {
    locale: string;
  };
};

export default async function Home({ params: { locale } }: HomeProps) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <div className={styles.page}>
      <header>
        {/* link to a static page */}
        <Link href={locale === "en" ? "/about" : `/${locale}/about`}>
          {t("about")}
        </Link>

        {/* link to a dynamic page */}
        <Link href={locale === "en" ? "/posts" : `/${locale}/posts`}>
          {t("posts")}
        </Link>

        {/* add translation switcher */}
        <Link
          className={styles.translationSwitcher}
          href={`/${locale === "en" ? "ro" : "en"}`}
        >
          {locale === "en" ? "RO" : "EN"}
        </Link>
      </header>

      <main>
        <h1>Desription</h1>

        <p>
          About page is a static page that will be generated at build time using
          specifc props to rebder the translations
        </p>
        <p>
          {" "}
          Posts page is a SSR page that will serve the prefetched data (the list
          of posts){" "}
        </p>

        <p>
          By clicking on a posts you will open a dynamic page that will open the
          post details
        </p>

        <p>
          next to the links will be a translation switcher that can switch
          between english and romanian
        </p>
      </main>
    </div>
  );
}
