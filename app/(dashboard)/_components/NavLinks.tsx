'use client'
import { Button } from "@/components/ui/button";
import { Show, SignInButton, UserButton } from "@clerk/nextjs"
import { Binoculars, Briefcase,  } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"


const NavLinks = () => {
    const pathname = usePathname();
    const isOnAdminPage = pathname?.startsWith("/admin");
    const isOnJobsPage = pathname?.startsWith("/jobs");

  return (
    <div className="flex gap-x-2 ml-auto">
        {isOnAdminPage || isOnJobsPage ? <Link href={"/"}>
            <Button variant={"outline"} size={"sm"} className="border-green-400/20">
                 <Binoculars />
                Search Jobs
            </Button>
        </Link> : 
        <Link href={"/admin/jobs"}>
             <Button variant={"outline"} size={"sm"} className="border-green-400/20">
                <Briefcase />
                HR Mode
            </Button>
        </Link>
        
        }
        <Show when="signed-in">
        <UserButton />
      </Show>
      <Show when="signed-out">
        <SignInButton />
      </Show>
    </div>
  )
}

export default NavLinks
