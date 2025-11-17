import Link from 'next/link'


export default function Navbar() {
    return(
        <nav className="bg-gray-900 text-white p-4 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/auth" className="text-xl font-bold">
                    Bussdesk
                </Link>
                <div className="flex gap-4">
                    <Link href="/auth/login" className="hover:text-gray-300">
                        Login
                    </Link>
                    <Link href="/auth/register" className="hover:text-gray-300">
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    )
}