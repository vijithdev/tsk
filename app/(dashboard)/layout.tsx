import { ReactNode } from "react"

type DashboardLayoutProps = {
    children: ReactNode;
}

const DashboardLayout = ({children} : DashboardLayoutProps) => {
  return (
    <div className='h-full'>
      <header>
        header
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
