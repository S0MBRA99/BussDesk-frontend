import { useState } from "react";
import { ShieldQuestionMark } from "lucide-react";

export default function CalendarComponent() {
    const [showHelpModal, setShowHelpModal] = useState(false);

    return (
        <div className="h-full w-full flex flex-col">

            {/* Top bar */}
            <div className="w-full flex items-center justify-end p-2 sm:p-3">
                <button
                    onClick={() => setShowHelpModal(true)}
                    title="How to see your calendar"
                    className="p-2 rounded-lg hover:bg-muted transition"
                >
                    <ShieldQuestionMark className="w-5 h-5" />
                </button>
            </div>

            {/* Calendar responsive wrapper */}
            <div className="flex-1 w-full rounded-xl overflow-hidden shadow-lg">
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=lyonelworks99%40gmail.com&ctz=Europe%2FMadrid"
                    className="
                        border-0 w-full h-full
                        dark:invert dark:hue-rotate-180
                    "
                    style={{ minHeight: "300px" }}
                    title="Google Calendar"
                ></iframe>
            </div>

            {/* Modal */}
            {showHelpModal && (
                <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl w-full max-w-sm shadow-xl">

                        <h2 className="text-xl font-semibold mb-3">
                            Google Calendar Configuration
                        </h2>

                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            To view your calendar without login screens, you need
                            to make it public from your Google Calendar settings.
                        </p>

                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            If the task doesn’t show right away, it’s because of Google — it will appear soon.
                        </p>

                        <a
                            className="text-blue-600 dark:text-blue-400 underline block mb-5"
                            href="https://calendar.google.com/calendar/u/0/r/settings"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Open Google Calendar Settings
                        </a>

                        <button
                            onClick={() => setShowHelpModal(false)}
                            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Understood
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
