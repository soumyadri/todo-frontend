import React from "react";

const panelOptions = [
    { name: "Upcoming", path: "/upcoming", logo: "📅" },
    { name: "In Progress", path: "/in-progress", logo: "🔄" },
    { name: "Completed", path: "/completed", logo: "✅" },
    { name: "Archived", path: "/archived", logo: "📦" },
    { name: "Deleted", path: "/deleted", logo: "🗑️" }
];

export default function LeftPanel() {
    return (
        <div className="bg-gray-200 w-[20%] h-screen p-4 rounded-lg shadow-lg">
            <p className="text-gray-700 text-2xl font-bold">Menu</p>
            <div className="mt-10 text-gray-500 text-md font-semibold">
                <p>TASKS</p>
                <div className="ml-2">
                    {panelOptions.map((option, index) => (
                        <div key={index} className="mt-2 flex items-center gap-2">
                            <p className="text-xs">{option.logo}</p>
                            <a href="{option.path}" className="text-gray-700 hover:text-blue-500">
                                {option.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}