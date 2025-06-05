import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function RightPanel() {
    const [name, setName] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [status, setStatus] = React.useState("pending");
    const [date, setDate] = React.useState("");

    return (
        <div className="bg-gray-100 w-[30%] h-screen p-4 rounded-lg shadow-lg">
            <p className="text-gray-700 text-2xl font-bold">Menu</p>
            <div className="mt-10 text-gray-500 text-md flex flex-col gap-4 font-semibold">
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <Input
                    type="textarea"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Write your notes..."
                    multiline
                    rows={5}
                />
                <Input
                    type="select"
                    label="Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    options={[
                        { label: 'Pending', value: 'pending' },
                        { label: 'In Progress', value: 'in_progress' },
                        { label: 'Completed', value: 'completed' }
                    ]}
                    placeholder="Select status"
                />
                <Input
                    type="date"
                    label="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="mt-10 flex justify-end gap-4 absolute bottom-4 right-4">
                <Button text="Cancel" color="gray" onClick={() => console.log('Cancelled')} />
                <Button text="Save" color="primary" onClick={() => console.log('Saved')} />
            </div>
        </div>
    );
}