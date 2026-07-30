//  'use client';

import { fetchMessagesReceived } from '@/app/lib/data';
import dayjs from 'dayjs';

export default async function MessagesReceived() {
    const messagesReceived = await fetchMessagesReceived();

    return (
        <>
            {messagesReceived.map((msg) => {
                const formattedDate = dayjs(msg.date_sent).format('MM-DD-YYYY');
                return (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-3">
                        <div key={msg.id} className="px-6">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{msg.name}</div>
                                <div className="font-bold text-xl mb-2">{msg.email}</div>
                                <p className="text-gray-700 text-base">
                                    {msg.message}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <p>Date contacted: {formattedDate}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}