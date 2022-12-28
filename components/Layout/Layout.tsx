import Header from "../Header/Header";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    )
}