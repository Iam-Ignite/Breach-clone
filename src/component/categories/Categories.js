import React from 'react'

export default function Categories() {

    const categories = [
        {
            name: "General",
            icon: "🌎",
        },
        {
            name: "Business & Finance",
            icon: "📈",
        },
        {
            name: "Entertainment",
            icon: "🎥",
        },
        {
            name: "Crypto",
            icon: "🚀",
        },
        {
            name: "Technology",
            icon: "📱 ",
        }, {
            name: " Politics & Activism",
            icon: "✊🏽",
        },

        {
            name: "Food & Drink",
            icon: "🍕",
        },
        {
            name: "History",
            icon: " 🏛 ",
        },
        {
            name: "Fashion & Beauty",
            icon: "💄 ",
        },
        {
            name: " Sports",
            icon: "🏀",
        },
        {
            name: "Travel",
            icon: "✈️ ",
        },
        {
            name: "Health & Wellness",
            icon: "🏥 ",
        },
        {
            name: " Art & Illustration",
            icon: "🎨",
        },
        {
            name: " News",
            icon: "🗞",
        },
        {
            name: "Lifestyle",
            icon: "💡 ",
        },
        {
            name: " Faith & Spirituality",
            icon: "🙏🏽",
        },
        {
            name: "Humor",
            icon: "🤣",
        }, {
            name: "Science",
            icon: "🧬 ",
        },
        {
            name: "Education",
            icon: "📚 ",
        },
        {
            name: " Fiction",
            icon: "🎭",
        },
    ]

    return (
        <div className='mt-5 md:hidden px-6'>
            <h1 className='font-semibold text-[#000000] rounded-md mr-9 my-4 font-space text-4xl'>Categories</h1>
            <p className='font-normal text-[#4c4b4b] rounded-md mr-9 mt-3 my-4 font-space text-lg'>Discover content from topics you care about</p>
            <ul className="flex w-4/5 justify-start flex-wrap gap-6 	">
            {
                categories.map((link, idx) => (
                     <a key={idx} className="border border-[#18181841] hover:scale-105 hover:text-white hover:bg-[#8311f9] transition-all px-4 flex font-normal text-[#373737] rounded-md  font-space text-base py-2" href="/auth/login">{link.icon}{" "}{link.name}</a>
                ))
            }
            </ul>
        </div>
    )
}
