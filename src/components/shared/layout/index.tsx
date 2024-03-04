import { memo } from "react";
import Header from "./header";
import styles from "./styles.module.scss";
import Title from "./title";
import Footer from "./footer";
import { useLayout } from "@/hooks/layout/useLayout";

interface ILayout {
  children: JSX.Element[] | JSX.Element;
}

const Layout = memo(({ children }: ILayout) => {
  const { title, handleLinkToHome } = useLayout();
  return (
    <main className={styles.main}>
      <Header handleLinkToHome={handleLinkToHome} />
      <Title title={title} />
      <article className={styles.content}>{children}</article>
      <Footer />
    </main>
  );
});

export default Layout;
