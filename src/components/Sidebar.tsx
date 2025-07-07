 import './sideBar.css'

const Sidebar = () => {
    return(
        <aside>
            <div className="container">
                <div className="profile">
                    <a href="#"><h4>Notion</h4></a>
                </div>
                <div className="menu">
                    <div className="search">
                        <a href="#">Search</a>
                    </div>
                    <div className="home">
                        <a href="#">Home</a>
                    </div>
                    <div className="inbox">
                        <a href="#">Inbox</a>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar