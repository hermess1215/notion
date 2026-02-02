import Logo from '../../assets/logo.png'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
    return (
        <aside className='w-60 h-screen bg-[#F3F4F6] border-r border-gray-200 flex flex-col px-4 py-3'>
            <div className="flex items-center gap-2 mb-4 px-1">
                <img src={Logo} alt="Notion Logo" className='w-6 h-6' />
                <span className="text-sm font-semibold text-gray-700">
                    Notion
                </span>
            </div>
            
            <nav className='flex flex-col gap-1'>
                <SidebarItem />
            </nav>
        </aside>
    )
}

export default Sidebar