import './menu.css'

export function Header() {
    return (
        <>
            <header className="py-3 border-bottom bg-dark-light">
                <div className="containcommer-fluid d-flex flex-wrap justify-content-center align-items-center">
                    <form className="flex-grow-1 d-flex justify-content-center mb-3 mb-lg-0" role="search">
                        <div className="input-group w-50">
                            <span className="input-group-text"><i className="bi bi-search"></i></span>
                            <input type="text" className="form-control" id="buscar" placeholder="Busque pelo nome do curso ou trilha ..."/>
                        </div>
                    </form>
                </div>
            </header>
        </>
    );
}