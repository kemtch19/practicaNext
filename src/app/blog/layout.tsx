/* los layouts funcionan por jerarquias ya que si hay unno más interno que el otro se obedece al que esta más interno */

export default function blogLayout(
    {children}:{
        children:React.ReactNode
    }
){
    return(
        <>
            <header>Cabecera del blog</header>
            <main>
                <section>{children}</section>
                <aside>
                    <form action="">
                        <input type="search" name="" id="" placeholder="suerte"/>
                        <input type="submit" value="buscar" />
                    </form>
                </aside>
            </main>
            <footer>pie de blog</footer>
        </> 
    )
}