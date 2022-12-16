import React, {FC, useEffect} from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface IWrapperProps {
    children: React.ReactNode,
    title?: string,
    keywords?: string,
    description?: string,
    no_index?: boolean,
}

const Wrapper: FC<IWrapperProps> = (props) => {
    const {children, title, keywords, description, no_index} = props;

    return (
        <>
            <Head>
                <title>{title ?? "БЛОГ О ZАRАБОТКЕ ZARABARAHOROSHO"}</title>
                <meta name="description" content={description ?? "БЛОГ О ZАRАБОТКЕ ZARABARAHOROSHO"}/>
                <meta name="keywords" content={keywords ?? "заработок успех бизнес инвестиции"}/>
                {
                    no_index && (
                        <>
                            <meta key="robots" name="robots" content="noindex,follow"/>
                            <meta key="googlebot" name="googlebot" content="noindex,follow"/>
                        </>
                    )
                }
                <link rel="icon" href="/logo.svg"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
                      rel="stylesheet"/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Wrapper
