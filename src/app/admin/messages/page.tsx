import MessagesReceived from "@/app/ui/messages-received/page";
import { radley } from "../../ui/fonts"


export default function Messages() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans bg-[#f4f1e8]"> {/* bg-zinc-50 dark:bg-black */}
            <div className="relative isolate">
                <div className="mx-auto max-w-5xl">
                    <div className="text-center my-2">
                        <h2 className={`text-3xl font-bold ${radley.className}`}>Messages Received</h2>
                    </div>
                    <div className="grid grid-cols-3">
                        <MessagesReceived />
                    </div>
                </div>
            </div>
        </div>
    )
};