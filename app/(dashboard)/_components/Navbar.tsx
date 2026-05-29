import NavLinks from "./NavLinks"


const Navbar = () => {
  return (
    <div className="flex justify-end p-4 border-b h-full items-center bg-white dark:bg-zinc-950 shadow-sm ">

      {/*Mobile navigation */}
      <NavLinks />
    </div>
  )
}

export default Navbar
