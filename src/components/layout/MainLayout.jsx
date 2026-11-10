import Sidebar from './Sidebar'

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-violet-50">
      <Sidebar />

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}

export default MainLayout