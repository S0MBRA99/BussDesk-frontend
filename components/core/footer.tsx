import Link from "next/link";


export default function Footer() {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white mt-auto">
            <div className="flex gap-10">
                <Link href="/auth">Home Page</Link>
                <Link href="/auth/login">Login Page</Link>
                <Link href="/auth/register">Register Page</Link>
            </div>
        </footer>
    )
}