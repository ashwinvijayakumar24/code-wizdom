import React from "react"

export default function Error() {
    document.title = 'Page Not Found';
    return (
        <div className="mt-40">
            <h1 className="min-h-screen text-4xl text-white text-center p-6">Error 404</h1>
        </div>
    )
}
