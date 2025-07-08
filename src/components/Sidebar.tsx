 import './sideBar.css'

const Sidebar = () => {
    return(
        <aside>
            <div className="container">
                <div className="profile">
                    <a href="#"><h4>Notion</h4></a>
                </div>
                <div className="menus">
                    <div className='menu' id='search'>
                        <a href="#">Search</a>
                    </div>
                    <div className='menu' id='home'>
                        <a href="#">Home</a>
                    </div>
                    <div className='menu' id='inbox'>

                        <a href="#">Inbox</a>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar