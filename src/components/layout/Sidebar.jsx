
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  UsersRound,
  CalendarCheck,
  Wallet,
  ChartNoAxesCombined,
  Settings,
  BookOpen,
  LogOut,
} from 'lucide-react'

const menuItems = [
  {
    title: 'Dashboard',
    path: '/',
    icon: LayoutDashboard,
  },
  {
    title: 'Students',
    path: '/students',
    icon: Users,
  },
  {
    title: 'Teachers',
    path: '/teachers',
    icon: GraduationCap,
  },
  {
    title: 'Groups',
    path: '/groups',
    icon: UsersRound,
  },
  {
    title: 'Attendance',
    path: '/attendance',
    icon: CalendarCheck,
  },
  {
    title: 'Payments',
    path: '/payments',
    icon: Wallet,
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: ChartNoAxesCombined,
  },
]

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-100 flex flex-col">

      {/* Logo */}
      <div className="h-20 px-6 flex items-center gap-3 border-b border-gray-100">
        <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center">
          <BookOpen className="text-white" size={22} />
        </div>

        <div>
          <h1 className="text-lg font-bold text-gray-900">
            EduCenter
          </h1>
          <p className="text-xs text-gray-400">
            Management System
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-4">
          Main Menu
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-violet-600 text-white shadow-md shadow-violet-200'
                      : 'text-gray-500 hover:bg-violet-50 hover:text-violet-600'
                  }`
                }
              >
                <Icon size={20} />
                <span>{item.title}</span>
              </NavLink>
            )
          })}
        </div>
      </nav>

      {/* Bottom section */}
      <div className="px-4 py-5 border-t border-gray-100">

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? 'bg-violet-600 text-white'
                : 'text-gray-500 hover:bg-violet-50 hover:text-violet-600'
            }`
          }
        >
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>

        <button className="w-full flex items-center gap-3 px-3 py-3 mt-1 rounded-xl text-sm font-medium text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all">
          <LogOut size={20} />
          <span>Log out</span>
        </button>

        {/* User profile */}
        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
          <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 font-semibold">
            AD
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-800">
              Admin User
            </p>
            <p className="text-xs text-gray-400">
              Administrator
            </p>
          </div>
        </div>

      </div>
    </aside>
  )
}

export default Sidebar
