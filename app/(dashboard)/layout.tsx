import { ReactNode } from "react"
import Navbar from "./_components/Navbar";

type DashboardLayoutProps = {
    children: ReactNode;
}

const DashboardLayout = ({children} : DashboardLayoutProps) => {
  return (
    <div className='h-full'>
      <header className="h-20 fixed inset-y-0 w-full z-50">
        <Navbar />
      </header>

      {/* siderbar */}
      <div>
        sidebar
      </div>
      <main>{children}</main>
    </div>
  )
}

export default DashboardLayout
