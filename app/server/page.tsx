import React, { Suspense } from 'react';

const fetchData = async () => {
    try {
        const response = await fetch(`${process.env.USER_LIST_URL}/posts`, {
            cache: 'no-store',
        });
        if (!response.ok) {
            throw new Error('User list API request failed');
        }
        const responseData = await response.json();
        return responseData;
    } catch (error: any) {
        throw new Error(`${error.message}`);
    }
}

const UserList = async () => {
    const responseData = await fetchData();

    return (
            <ul className="grid grid-cols-1 md:gap-4 md:grid-cols-4 gap-y-4">
                {responseData.map((values: any, id: number) => (
                    <li
                        className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                        key={id}
                    >
                        {values.title}
                    </li>
                ))}
            </ul>
    );
};

const ServerSideRendering = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto my-4">
                <h1 className="text-3xl font-bold mb-4">Server-side User Listing</h1>
                <Suspense fallback={
                    <div role="status" className="w-full animate-pulse">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    </div>
                }>
                    <UserList />
                </Suspense>
            </div>
        </>
        
    );
};

export default ServerSideRendering;
