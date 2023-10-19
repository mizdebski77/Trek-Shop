const express = require("express");
const cors = require("cors");
const nanoid = require('nanoid');

const app = express();
app.use(express.json());
app.use(cors());
const generateId = () => nanoid(); // Use nanoid directly

const products = {
    Accessories: [
        {
            id: generateId(),
            name: "Carabiner",
            description: "Versatile carabiner.",
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952257/TrekShop/Accessories/1_nsoqic.png',
            longDescription: "The Carabiner is an essential tool for outdoor enthusiasts. This versatile carabiner can be used for a wide range of purposes, including securing gear, attaching items to your backpack, and more. Its durable construction ensures reliable performance in various outdoor conditions. Whether you're an avid rock climber, a backpacker, or a camper, this carabiner is a versatile and dependable companion for your adventures. Its sturdy design and reliable locking mechanism provide peace of mind when you need to secure your gear, set up a makeshift clothesline, or simply hang your essentials within easy reach. The Carabiner is built to withstand the elements, with rust-resistant materials that ensure it won't corrode even in wet conditions. Its ergonomic shape fits comfortably in your hand and is easy to clip and unclip, making it a breeze to use. This carabiner is an indispensable accessory for outdoor enthusiasts who demand quality and versatility in their gear. Add it to your kit today and experience the convenience and reliability it brings to your outdoor excursions.",
            mediumDescription: "The versatile Carabiner, an essential tool for outdoor enthusiasts, ensures gear security. Its rust-resistant build guarantees durability in various conditions.",

            price: 39.99,
            category: 'Accessories'
        },
        {
            id: generateId(),
            name: "Trekking Poles",
            description: "Sturdy trekking poles.",
            longDescription: "The Trekking Poles provide stability and support during your hikes and treks. These sturdy poles are adjustable to suit your height and terrain. They help reduce strain on your knees and improve balance on uneven trails. With comfortable grips and durable materials, they are a valuable addition to your outdoor gear. Whether you're traversing steep mountain paths or enjoying a leisurely walk in the woods, these trekking poles will become your trusted companions. They are crafted from lightweight yet robust materials that can withstand the rigors of the trail. The adjustable height feature ensures they can be tailored to your specific needs, and the comfortable grips reduce hand fatigue during long treks. By distributing your weight and providing additional points of contact with the ground, these trekking poles reduce the impact on your knees and ankles. They're also great for maintaining balance and stability when crossing streams or navigating rocky terrain. Don't let rough trails hold you back; conquer them with the support of these reliable trekking poles.",
            price: 15.49,
            mediumDescription: "Sturdy Trekking Poles offer balance and support on uneven trails. Adjustable height and durable design make them ideal for hikers.",
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952262/TrekShop/Accessories/5_hb6huo.png',
            category: 'Accessories'
        },
        {
            id: generateId(),
            name: "Carabiner",
            description: "Versatile carabiner.",
            longDescription: "The Carabiner is an essential tool for outdoor enthusiasts. This versatile carabiner can be used for a wide range of purposes, including securing gear, attaching items to your backpack, and more. Its durable construction ensures reliable performance in various outdoor conditions. Whether you're an avid rock climber, a backpacker, or a camper, this carabiner is a versatile and dependable companion for your adventures. Its sturdy design and reliable locking mechanism provide peace of mind when you need to secure your gear, set up a makeshift clothesline, or simply hang your essentials within easy reach. The Carabiner is built to withstand the elements, with rust-resistant materials that ensure it won't corrode even in wet conditions. Its ergonomic shape fits comfortably in your hand and is easy to clip and unclip, making it a breeze to use. This carabiner is an indispensable accessory for outdoor enthusiasts who demand quality and versatility in their gear. Add it to your kit today and experience the convenience and reliability it brings to your outdoor excursions.",
            price: 8.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952257/TrekShop/Accessories/1_nsoqic.png',
            category: 'Accessories'
        },
        {
            id: generateId(),
            name: "Trekking Hat",
            description: "Sun protection trekking hat.",
            longDescription: "The Trekking Hat provides essential sun protection during your outdoor adventures. This wide-brimmed hat shields your face and neck from harmful UV rays. It's designed for breathability and comfort, making it ideal for hot and sunny treks. Stay cool and protected with this trekking hat. When you're out in the wilderness, it's crucial to shield yourself from the sun's harsh rays. The Trekking Hat is your perfect companion for staying safe and comfortable. Its wide brim offers ample shade to protect your face and neck, reducing the risk of sunburn. The hat is made from lightweight, breathable materials that keep you cool and comfortable, even in scorching temperatures. The adjustable chin strap ensures a secure fit, even in windy conditions. Additionally, the hat is easy to pack and carry in your backpack, making it a versatile and practical choice for outdoor enthusiasts. Don't compromise on sun protection—choose the Trekking Hat to keep yourself safe and comfortable during your adventures.",
            price: 12.99,
            mediumDescription: "The Trekking Hat provides sun protection with a wide brim, keeping you cool and safe. The adjustable chin strap ensures a secure fit.",
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952256/TrekShop/Accessories/7_ndhisx.png',
            category: 'Accessories'
        },
        {
            id: generateId(),
            name: "Sleeping Bag",
            description: "Compact sleeping bag.",
            longDescription: "The Sleeping Bag is designed for a comfortable night's sleep during your camping trips. This compact sleeping bag is lightweight and easy to carry in your backpack. It provides excellent insulation and warmth, ensuring you stay cozy even in chilly nights. Get a good night's rest with this reliable sleeping bag. Camping under the starry night sky has never been this comfortable. The compact Sleeping Bag is your ticket to a cozy and warm night's sleep in the great outdoors. Its lightweight design ensures it won't weigh you down during your hikes, and its compact size makes it easy to stow in your backpack. Despite its portability, this sleeping bag offers excellent insulation to keep you warm on those chilly nights. The high-quality materials trap body heat, ensuring you stay snug and comfortable. The zipper is easy to use, allowing you to get in and out without any hassle. With this sleeping bag, you'll wake up refreshed and ready for your next day of adventure. Get ready for a night of restful sleep with this reliable companion.",
            mediumDescription: "The Compact Sleeping Bag offers cozy warmth for camping trips. Its lightweight, insulated design ensures a comfortable night's sleep.",
            price: 19.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952255/TrekShop/Accessories/4_qk9cgb.png',
            category: 'Accessories'
        },
        {
            id: generateId(),
            name: "Headlamp",
            description: "Hands-free headlamp.",
            longDescription: "The Headlamp is a versatile hands-free lighting solution for your outdoor adventures. This headlamp is designed for comfort and ease of use. It offers multiple lighting modes, including a bright beam for hiking at night. Whether you're setting up camp or night hiking, this headlamp is an essential accessory. When the sun sets on your outdoor adventure, the Headlamp becomes your best friend. It provides a hands-free lighting solution that ensures you can navigate and perform tasks even in the darkest of conditions. The headlamp is designed for comfort, with an adjustable strap that fits securely on your head. It offers multiple lighting modes, including a bright beam for hiking at night and a softer setting for reading or tasks around the camp. The beam is powerful and reliable, making it a valuable companion whether you're setting up camp, night hiking, or simply need extra light in low-light conditions. Don't let the lack of daylight limit your outdoor experiences—add this versatile headlamp to your gear and explore the night with confidence.",
            mediumDescription: "The versatile Headlamp provides hands-free lighting for outdoor activities. With adjustable brightness settings, it's a must-have for nighttime adventures.",
            price: 7.49,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952247/TrekShop/Accessories/2_kksyw4.png',
            category: 'Accessories'
        },
        {
            id: generateId(),
            name: "Hydration Reservoir",
            description: "Convenient hydration reservoir.",
            longDescription: "The Hydration Reservoir is a must-have for staying hydrated on the trail. This reservoir can be easily integrated into your backpack, providing a convenient way to drink while on the move. It has a large capacity and a leak-proof design. Stay refreshed during your treks with this hydration reservoir. Staying hydrated during your outdoor adventures is crucial, and the Hydration Reservoir ensures you have easy access to water whenever you need it. It's designed for convenience and efficiency, easily integrating into your backpack so you can sip water on the go. With a large capacity, it can quench your thirst during long hikes or intense activities. The leak-proof design ensures that your gear stays dry, even when the going gets tough. Its high-quality construction guarantees a long-lasting and dependable performance. Don't let dehydration slow you down; stay refreshed and energized with this essential hydration reservoir by your side.",
            mediumDescription: "The Hydration Reservoir is essential for staying hydrated on the move. Its leak-proof design and large capacity ensure you're refreshed during your treks.",
            price: 24.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952244/TrekShop/Accessories/8_xy5qmt.png',
            category: 'Accessories'
        },
        {
            id: generateId(),
            name: "Sleeping Bag",
            description: "Compact sleeping bag.",
            longDescription: "The Sleeping Bag is designed for a comfortable night's sleep during your camping trips. This compact sleeping bag is lightweight and easy to carry in your backpack. It provides excellent insulation and warmth, ensuring you stay cozy even in chilly nights. Get a good night's rest with this reliable sleeping bag. Camping under the starry night sky has never been this comfortable. The compact Sleeping Bag is your ticket to a cozy and warm night's sleep in the great outdoors. Its lightweight design ensures it won't weigh you down during your hikes, and its compact size makes it easy to stow in your backpack. Despite its portability, this sleeping bag offers excellent insulation to keep you warm on those chilly nights. The high-quality materials trap body heat, ensuring you stay snug and comfortable. The zipper is easy to use, allowing you to get in and out without any hassle. With this sleeping bag, you'll wake up refreshed and ready for your next day of adventure. Get ready for a night of restful sleep with this reliable companion.",
            mediumDescription: "The TrailSeeker 35, a lightweight 35L backpack, combines functionality and comfort. It features a hydration reservoir sleeve and adjustable shoulder straps.",
            price: 14.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952244/TrekShop/Accessories/6_y8tmn6.png',
            category: 'Accessories'
        },
        {
            id: generateId(),
            name: "Carabiner",
            description: "Versatile carabiner.",
            longDescription: "The Carabiner is an essential tool for outdoor enthusiasts. This versatile carabiner can be used for a wide range of purposes, including securing gear, attaching items to your backpack, and more. Its durable construction ensures reliable performance in various outdoor conditions. Whether you're an avid rock climber, a backpacker, or a camper, this carabiner is a versatile and dependable companion for your adventures. Its sturdy design and reliable locking mechanism provide peace of mind when you need to secure your gear, set up a makeshift clothesline, or simply hang your essentials within easy reach. The Carabiner is built to withstand the elements, with rust-resistant materials that ensure it won't corrode even in wet conditions. Its ergonomic shape fits comfortably in your hand and is easy to clip and unclip, making it a breeze to use. This carabiner is an indispensable accessory for outdoor enthusiasts who demand quality and versatility in their gear. Add it to your kit today and experience the convenience and reliability it brings to your outdoor excursions.",
            mediumDescription: "The SummitPro Trekker 50 offers durability and 50L storage. Its reinforced frame and water bottle pocket make it perfect for challenging treks.",
            price: 11.49,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952243/TrekShop/Accessories/10_frs0zm.png',
            category: 'Accessories'
        },
        {
            id: generateId(),
            name: "Sleeping Bag",
            description: "Compact sleeping bag.",
            longDescription: "The Sleeping Bag is designed for a comfortable night's sleep during your camping trips. This compact sleeping bag is lightweight and easy to carry in your backpack. It provides excellent insulation and warmth, ensuring you stay cozy even in chilly nights. Get a good night's rest with this reliable sleeping bag. Camping under the starry night sky has never been this comfortable. The compact Sleeping Bag is your ticket to a cozy and warm night's sleep in the great outdoors. Its lightweight design ensures it won't weigh you down during your hikes, and its compact size makes it easy to stow in your backpack. Despite its portability, this sleeping bag offers excellent insulation to keep you warm on those chilly nights. The high-quality materials trap body heat, ensuring you stay snug and comfortable. The zipper is easy to use, allowing you to get in and out without any hassle. With this sleeping bag, you'll wake up refreshed and ready for your next day of adventure. Get ready for a night of restful sleep with this reliable companion.",
            price: 9.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696954282/TrekShop/Accessories/3_xfke21.png',
            category: 'Accessories'
        },
    ],

    Backpacks: [
        {
            id: generateId(),
            category: "Backpacks",
            name: "TrailSeeker 35",
            capacity: 35,
            description: "Lightweight 35L backpack.",
            longDescription: "The TrailSeeker 35 is the perfect choice for trekkers who value lightweight design and functionality. With a 35-liter capacity, it provides ample space for your essentials. This backpack features multiple pockets, including a dedicated hydration reservoir sleeve. The adjustable shoulder straps ensure a comfortable fit for long hikes. Embark on your adventures with this reliable backpack. Prices start at 40.50 euros. Whether you are a seasoned trekker or a novice, the TrailSeeker 35 is designed to meet your needs. Its lightweight design won't weigh you down on the trail, and the 35-liter capacity allows you to carry all your gear without feeling burdened. The dedicated hydration reservoir sleeve ensures you stay hydrated throughout your journey. The adjustable shoulder straps are designed for long hikes, reducing strain and ensuring a comfortable fit. The TrailSeeker 35 is not just a backpack; it's a reliable companion for your outdoor adventures. Starting at just 40.50 euros, it offers great value for a high-quality trekking backpack. It's time to gear up and hit the trails with the TrailSeeker 35 by your side.",
            mediumDescription: "The TrailSeeker 35, a lightweight 35L backpack, combines functionality and comfort. It features a hydration reservoir sleeve and adjustable shoulder straps.",
            price: 40.50,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952268/TrekShop/BackPacks/4_fchr9b.png'
        },
        {
            id: generateId(),
            name: "SummitPro Trekker 50",
            category: "Backpacks",
            capacity: 50,
            description: "Durable 50L trekking companion.",
            longDescription: "The SummitPro Trekker 50 is built to withstand the rigors of outdoor exploration. With a 50-liter capacity, it offers spacious storage for your gear. This backpack is equipped with a reinforced frame and durable materials to handle tough conditions. It features multiple pockets, including a dedicated water bottle pocket. The adjustable hip belt ensures all-day comfort on extended adventures. Prices start at 45.25 euros. For trekkers who demand durability and ample storage, the SummitPro Trekker 50 is the perfect choice. Its 50-liter capacity provides room for all your gear, and the reinforced frame and tough materials can handle the harshest conditions. Multiple pockets, including a dedicated water bottle pocket, make it easy to access your essentials. The adjustable hip belt ensures comfort, even on long, strenuous adventures. Starting at just 45.25 euros, the SummitPro Trekker 50 is an investment in your outdoor experiences. It's time to conquer the wilderness with a backpack you can rely on.",
            mediumDescription: "The SummitPro Trekker 50 offers durability and 50L storage. Its reinforced frame and water bottle pocket make it perfect for challenging treks.",
            price: 45.25,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952267/TrekShop/BackPacks/9_fnxds8.png'
        },
        {
            id: generateId(),
            name: "WildVenture Explorer 70",
            capacity: 70,
            category: "Backpacks",
            description: "Spacious 70L trekking backpack.",
            longDescription: "The WildVenture Explorer 70 is designed for trekkers who need extra storage space. With a 70-liter capacity, it offers room for all your equipment. This backpack features a plethora of pockets, including a dedicated hydration reservoir sleeve. The adjustable shoulder straps ensure a comfortable fit for extended hikes. Embark on your explorations with this spacious and reliable backpack. Prices start at 8.99 euros. When you require maximum storage capacity for your trekking adventures, the WildVenture Explorer 70 has you covered. With a massive 70-liter capacity, it can accommodate all your equipment, ensuring you're well-prepared for extended journeys. The numerous pockets, including a dedicated hydration reservoir sleeve, make it easy to organize your gear. The adjustable shoulder straps are designed for comfort on long hikes, and the backpack's durability ensures it can withstand the challenges of outdoor exploration. Starting at just 8.99 euros, the WildVenture Explorer 70 offers exceptional value for trekkers who demand space and reliability in their backpacks. It's time to pack up and head out on unforgettable adventures with the WildVenture Explorer 70 as your trusted companion.",
            mediumDescription: "The WildVenture Explorer 70, with a massive 70L capacity, is built for extended journeys. It offers numerous pockets and adjustable shoulder straps.",
            price: 8.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952261/TrekShop/BackPacks/3_olan67.png'
        },
        {
            id: generateId(),
            name: "ExpeditionMaster Pro 55",
            capacity: 55,
            category: "Backpacks",
            description: "Professional-grade 55L backpack.",
            longDescription: "The ExpeditionMaster Pro 55 is the choice of professional trekkers who demand top-notch performance. With a 55-liter capacity, it offers ample space for your gear. This backpack is engineered with advanced materials and a reinforced frame for durability. It features numerous pockets, including a dedicated water bottle pocket. The adjustable hip belt ensures all-day comfort on challenging treks. Prices start at 12.99 euros. For trekkers who require professional-grade equipment, the ExpeditionMaster Pro 55 is the ultimate choice. Its 55-liter capacity provides ample space for all your gear, and it's built to withstand the toughest outdoor conditions. The backpack is crafted with advanced materials and a reinforced frame for exceptional durability. Multiple pockets, including a dedicated water bottle pocket, allow for efficient organization. The adjustable hip belt ensures comfort during long and challenging treks. Starting at just 12.99 euros, the ExpeditionMaster Pro 55 is an investment in your trekking success. It's time to take your outdoor adventures to the next level with the professional-grade performance of the ExpeditionMaster Pro 55.",
            mediumDescription: "The ExpeditionMaster Pro 55 is a professional-grade 55L backpack with a reinforced frame, making it the ultimate choice for demanding treks.",
            price: 12.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952260/TrekShop/BackPacks/6_t2qrr7.png'
        },
        {
            id: generateId(),
            name: "AdventureLite Trekking 40",
            capacity: 40,
            category: "Backpacks",
            description: "Versatile 40L trekking backpack.",
            longDescription: "The AdventureLite Trekking 40 is a versatile companion for trekkers exploring a variety of terrains. With a 40-liter capacity, it offers ample space for your essentials. This backpack features multiple pockets, including a dedicated hydration reservoir sleeve. The adjustable shoulder straps ensure a comfortable fit for different hikes. Set off on your adventures with this adaptable backpack. Prices start at 19.99 euros. Whether you're a trekker who enjoys exploring a variety of terrains, the AdventureLite Trekking 40 is the perfect companion. With a 40-liter capacity, it offers ample space for your essentials, and its versatile design accommodates various types of treks. The multiple pockets, including a dedicated hydration reservoir sleeve, make it easy to access your gear. Adjustable shoulder straps ensure a comfortable fit for different hiking adventures. Starting at just 19.99 euros, the AdventureLite Trekking 40 is an affordable and versatile choice for trekkers. It's time to embark on your outdoor adventures with confidence in this adaptable backpack.",
            mediumDescription: "The AdventureLite Trekking 40 is versatile, offering 40L storage for trekkers exploring a variety of terrains. It features a hydration reservoir sleeve.",
            price: 19.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952255/TrekShop/BackPacks/2_hrgmhd.png'
        },
        {
            id: generateId(),
            name: "LiteTrail Trekker 30",
            capacity: 30,
            category: "Backpacks",
            description: "Lightweight 30L trekking companion.",
            longDescription: "The LiteTrail Trekker 30 is the ideal choice for trekkers who prefer a lightweight and compact design. With a 30-liter capacity, it offers just enough space for your essentials. This backpack features multiple pockets, including a dedicated hydration reservoir sleeve. The adjustable shoulder straps ensure a comfortable fit for shorter hikes. Embark on your outdoor journeys with this nimble backpack. Prices start at 7.49 euros. If you're a trekker who values a lightweight and compact design, the LiteTrail Trekker 30 is the perfect choice. With a 30-liter capacity, it provides just enough space for your essentials without adding unnecessary weight. The multiple pockets, including a dedicated hydration reservoir sleeve, help you stay organized on the trail. Adjustable shoulder straps ensure a comfortable fit, making it ideal for shorter hikes and nimble adventures. Starting at just 7.49 euros, the LiteTrail Trekker 30 offers excellent value for trekkers seeking a nimble and efficient backpack. It's time to hit the trails with a lightweight companion by your side.",
            mediumDescription: "The LiteTrail Trekker 30 is a lightweight and compact 30L backpack. It's perfect for shorter hikes and nimble adventures with multiple pockets.",
            price: 7.49,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952242/TrekShop/BackPacks/8_slwh8c.png'
        },
        {
            id: generateId(),
            name: "SummitHiker Trekking 45",
            capacity: 45,
            category: "Backpacks",
            description: "Versatile 45L trekking backpack.",
            longDescription: "The SummitHiker Trekking 45 is versatile and suitable for a wide range of outdoor activities. With a 45-liter capacity, it provides room for your gear. This backpack features multiple pockets, including a dedicated water bottle pocket. The adjustable hip belt ensures all-day comfort. Whether you're hiking, trekking, or exploring, this backpack will be your reliable companion. Prices start at 24.99 euros. When you need a versatile backpack that can adapt to a wide range of outdoor activities, the SummitHiker Trekking 45 is the ideal choice. Its 45-liter capacity offers ample room for your gear, and multiple pockets, including a dedicated water bottle pocket, provide convenient storage options. The adjustable hip belt ensures all-day comfort, no matter what outdoor adventure you're embarking on. Starting at just 24.99 euros, the SummitHiker Trekking 45 is a reliable companion for trekkers seeking adaptability and performance in their backpacks. It's time to explore the great outdoors with confidence in this versatile backpack.",
            mediumDescription: "The SummitHiker Trekking 45 is a versatile 45L backpack suitable for a wide range of outdoor activities. It offers multiple pockets and an adjustable hip belt.",
            price: 24.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952248/TrekShop/BackPacks/1_f4ginw.png'
        },
        {
            id: generateId(),
            name: "ExplorerLite Trekking 35",
            capacity: 35,
            category: "Backpacks",
            description: "Lightweight 35L trekking backpack.",
            longDescription: "The ExplorerLite Trekking 35 is designed for trekkers who value lightweight and agility. With a 35-liter capacity, it provides ample space for your essentials. This backpack features multiple pockets, including a dedicated hydration reservoir sleeve. The adjustable shoulder straps ensure a comfortable fit for your outdoor adventures. Prices start at 14.99 euros. If you're a trekker who values lightweight design and agility, the ExplorerLite Trekking 35 is the perfect choice. With a 35-liter capacity, it offers ample space for your essentials without unnecessary bulk. The multiple pockets, including a dedicated hydration reservoir sleeve, help you stay organized on the trail. Adjustable shoulder straps ensure a comfortable fit for all your outdoor adventures. Starting at just 14.99 euros, the ExplorerLite Trekking 35 is an affordable and lightweight backpack designed for trekkers who prioritize ease of movement. It's time to set off on your outdoor adventures with confidence and comfort with the ExplorerLite Trekking 35 by your side.",
            mediumDescription: "The ExplorerLite Trekking 35 is designed for lightweight and agility-focused trekkers. It features 35L storage, multiple pockets, and a hydration reservoir sleeve.",
            price: 14.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952248/TrekShop/BackPacks/7_z3wq9b.png'
        },
        {
            id: generateId(),
            name: "RapidTrail Trekking 50",
            capacity: 50,
            category: "Backpacks",
            description: "Versatile 50L trekking companion.",
            longDescription: "The RapidTrail Trekking 50 is versatile and designed for various outdoor environments. With a 50-liter capacity, it offers room for your gear. This backpack features multiple pockets, including a dedicated hydration reservoir sleeve. The adjustable shoulder straps ensure a comfortable fit for different hikes. Explore the great outdoors with confidence in this adaptable backpack. Prices start at 11.49 euros. When you're an outdoor enthusiast who explores various environments, the RapidTrail Trekking 50 is the perfect companion. With a 50-liter capacity, it provides ample room for your gear, whether you're hiking, trekking, or embarking on other outdoor adventures. Multiple pockets, including a dedicated hydration reservoir sleeve, ensure your gear is easily accessible. The adjustable shoulder straps provide a comfortable fit, no matter the type of hike you're on. Starting at just 11.49 euros, the RapidTrail Trekking 50 offers fantastic value for trekkers seeking adaptability and performance in their backpacks. It's time to explore the great outdoors with confidence in this versatile and reliable backpack.",
            mediumDescription: "The RapidTrail Trekking 50 is a versatile 50L backpack designed for various outdoor environments. It features multiple pockets and adjustable shoulder straps.",
            price: 11.49,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952242/TrekShop/BackPacks/8_slwh8c.png'
        },
        {
            id: generateId(),
            name: "LightTrail Trekker 40",
            capacity: 40,
            category: "Backpacks",
            description: "Lightweight 40L trekking backpack.",
            longDescription: "The LightTrail Trekker 40 is perfect for trekkers who prioritize a lightweight and compact design. With a 40-liter capacity, it offers just enough space for your essentials. This backpack features multiple pockets, including a dedicated hydration reservoir sleeve. The adjustable shoulder straps ensure a comfortable fit for shorter hikes. Embark on your outdoor journeys with this nimble backpack. Prices start at 9.99 euros. If you're a trekker who values a lightweight and compact design, the LightTrail Trekker 40 is the ideal choice. With a 40-liter capacity, it provides just enough space for your essentials without adding unnecessary weight. The multiple pockets, including a dedicated hydration reservoir sleeve, help you stay organized on the trail. Adjustable shoulder straps ensure a comfortable fit, making it ideal for shorter hikes and nimble adventures. Starting at just 9.99 euros, the LightTrail Trekker 40 offers great value for trekkers seeking a nimble and efficient backpack. It's time to hit the trails with a lightweight companion by your side.",
            mediumDescription: "The LightTrail Trekker 40 is perfect for trekkers valuing a lightweight and compact design. It offers 40L storage and features multiple pockets.",
            price: 9.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952242/TrekShop/BackPacks/8_slwh8c.png'
        },
    ],

    Clothes: [
        {
            id: generateId(),
            category: "Clothes",
            name: "StormShield Pro",
            description: "Weather-resistant hiking jacket.",
            longDescription: "The StormShield Pro is a top-notch hiking jacket designed to withstand the toughest weather conditions. Made from high-quality materials, this jacket offers excellent protection against rain, wind, and cold temperatures. Its breathable fabric ensures you stay comfortable during extended outdoor adventures. With a range of pockets and adjustable features, it's the ideal choice for trekkers who demand reliability and performance.",
            mediumDescription: "The StormShield Pro is a top-notch hiking jacket designed to withstand the toughest weather conditions. Made from high-quality materials, this jacket offers excellent protection against rain, wind, and cold temperatures.",
            price: 149.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952270/TrekShop/Clothes/5_wptzbn.png'
        },
        {
            id: generateId(),
            category: "Clothes",
            name: "RainGuard Lite",
            description: "Lightweight raincoat for trekkers.",
            longDescription: "The RainGuard Lite is the perfect companion for trekkers looking for a lightweight and reliable raincoat. Its compact design makes it easy to carry in your backpack, ensuring you're always prepared for unexpected rain showers. Despite its lightweight nature, it offers excellent protection against rain and wind.",
            mediumDescription: "The RainGuard Lite is the perfect companion for trekkers looking for a lightweight and reliable raincoat. Its compact design makes it easy to carry in your backpack, ensuring you're always prepared for unexpected rain showers.",
            price: 79.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952261/TrekShop/Clothes/9_el1cva.png'
        },
        {
            id: generateId(),
            category: "Clothes",
            name: "SummitShield Shell",
            description: "Versatile trekking shell jacket.",
            longDescription: "The SummitShield Shell is a versatile trekking shell jacket that adapts to changing weather conditions. Whether you're facing rain, wind, or a sudden drop in temperature, this jacket has you covered. Its innovative design includes a removable hood, adjustable cuffs, and multiple pockets for storage.",
            mediumDescription: "The SummitShield Shell is a versatile trekking shell jacket that adapts to changing weather conditions. Whether you're facing rain, wind, or a sudden drop in temperature, this jacket has you covered.",
            price: 129.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952261/TrekShop/Clothes/3_mwfuco.png'
        },
        {
            id: generateId(),
            category: "Clothes",
            name: "TrekFlex Hiking Shorts",
            description: "Flexible and durable hiking shorts.",
            longDescription: "The TrekFlex Hiking Shorts are designed for maximum comfort and durability on the trail. Their flexible fabric and ergonomic design allow for unrestricted movement, making them ideal for active treks. These shorts are equipped with multiple pockets for your essentials and are made from quick-drying, moisture-wicking material.",
            mediumDescription: "The TrekFlex Hiking Shorts are designed for maximum comfort and durability on the trail. Their flexible fabric and ergonomic design allow for unrestricted movement, making them ideal for active treks.",
            price: 49.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952257/TrekShop/Clothes/6_bqnk3i.png'
        },
        {
            id: generateId(),
            category: "Clothes",
            name: "AdventurePro Trekking Pants",
            description: "High-performance trekking shorts.",
            longDescription: "The AdventurePro Trekking Shorts excel in every aspect. Their reinforced stitching and durable construction are designed to withstand the rigors of the trail. Whether you're bushwhacking through dense undergrowth or facing rocky terrain, these shorts won't let you down. The water-resistant fabric ensures that you stay dry in wet conditions, and the adjustable waistband allows you to customize the fit to your liking.",
            mediumDescription: "The AdventurePro Trekking Shorts excel in every aspect. Their reinforced stitching and durable construction are designed to withstand the rigors of the trail. Whether you're bushwhacking through dense undergrowth or facing rocky terrain, these shorts won't let you down.",
            price: 69.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952251/TrekShop/Clothes/10_r42zhb.png'
        },
        {
            id: generateId(),
            category: "Clothes",
            name: "TrailBlaze Convertible Pants",
            description: "Convertible trekking pants.",
            longDescription: "The TrailBlaze Convertible Pants are a versatile addition to any trekker's wardrobe. These pants offer the convenience of both full-length and shorts with their zip-off legs. Made from lightweight, moisture-wicking fabric, they keep you comfortable in various weather conditions. The pants also feature UPF sun protection and multiple pockets for storage.",
            mediumDescription: "The TrailBlaze Convertible Pants are a versatile addition to any trekker's wardrobe. These pants offer the convenience of both full-length and shorts with their zip-off legs.",
            price: 89.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952242/TrekShop/Clothes/8_y1zf6w.png'
        },
        {
            id: generateId(),
            category: "Clothes",
            name: "AlpineGuard Waterproof Pants",
            description: "Waterproof hiking pants.",
            longDescription: "The AlpineGuard Waterproof Pants are a must-have for trekkers who encounter wet and challenging terrain. These pants offer complete waterproof protection to keep you dry even in heavy rain. Their durable construction includes reinforced knees and seat for added durability. With adjustable features and ventilation options, these pants ensure comfort and performance during your trekking adventures.",
            mediumDescription: "The AlpineGuard Waterproof Pants are a must-have for trekkers who encounter wet and challenging terrain. These pants offer complete waterproof protection to keep you dry even in heavy rain.",
            price: 119.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952245/TrekShop/Clothes/7_aeslxh.png'
        },
        {
            id: generateId(),
            category: "Clothes",
            name: "EcoTrail Trekking Jacket",
            description: "Sustainable trekking jacket.",
            longDescription: "The EcoTrail Trekking Jacket is designed for environmentally-conscious trekkers. Made from recycled materials, this jacket not only reduces waste but also offers outstanding performance. It is breathable, moisture-wicking, and quick-drying to keep you comfortable on the trail.",
            mediumDescription: "The EcoTrail Trekking Jacket is designed for environmentally-conscious trekkers. Made from recycled materials, this jacket not only reduces waste but also offers outstanding performance.",
            price: 99.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952248/TrekShop/Clothes/4_qiuhqn.png'
        }
    ],

    Shoes: [
        {
            id: generateId(),
            name: "TrailBlaze Hiking Boots",
            category: "Shoes",
            description: "Durable hiking boots.",
            longDescription: "The TrailBlaze Hiking Boots are built for durability and performance on the trail. These boots feature a rugged design with reinforced toe caps and ankle support. The waterproof and breathable membrane keeps your feet dry in any weather.",
            mediumDescription: "The TrailBlaze Hiking Boots are built for durability and performance on the trail. These boots feature a rugged design with reinforced toe caps and ankle support.",
            price: 149.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952260/TrekShop/Shoes/2_vos99l.png'
        },
        {
            id: generateId(),
            category: "Shoes",
            name: "SummitExplorer Trekking Shoes",
            description: "Versatile trekking shoes.",
            longDescription: "The SummitExplorer Trekking Shoes are versatile and suitable for a wide range of outdoor activities. These shoes provide a comfortable fit and excellent support for your feet. They are equipped with a durable outsole that offers great traction.",
            mediumDescription: "The SummitExplorer Trekking Shoes are versatile and suitable for a wide range of outdoor activities. These shoes provide a comfortable fit and excellent support for your feet.",
            price: 129.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952243/TrekShop/Shoes/8_omknis.png'
        },

        {
            id: generateId(),
            name: "SummitExplorer Trekking Shoes",
            category: "Shoes",
            description: "Versatile trekking shoes.",
            longDescription: "The SummitExplorer Trekking Shoes are versatile and suitable for a wide range of outdoor activities. These shoes provide a comfortable fit and excellent support for your feet. They are equipped with a durable outsole that offers great traction.",
            mediumDescription: "The SummitExplorer Trekking Shoes are versatile and suitable for a wide range of outdoor activities. These shoes provide a comfortable fit and excellent support for your feet.",
            price: 129.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952259/TrekShop/Shoes/10_cr0tjz.png'
        },
        {
            id: generateId(),
            name: "WildVenture Trail Runners",
            category: "Shoes",
            description: "Trail running shoes.",
            longDescription: "The WildVenture Trail Runners are designed for those who prefer fast-paced outdoor activities. These lightweight and breathable shoes are perfect for trail running and fast hikes. They feature a responsive cushioning system and a grippy outsole for stability.",
            mediumDescription: "The WildVenture Trail Runners are designed for those who prefer fast-paced outdoor activities. These lightweight and breathable shoes are perfect for trail running and fast hikes.",
            price: 89.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952256/TrekShop/Shoes/3_lhkspu.png'
        },
        {
            id: generateId(),
            name: "RuggedPath Hiking Boots",
            category: "Shoes",
            description: "Sturdy hiking boots.",
            longDescription: "The RuggedPath Hiking Boots are built to withstand challenging terrain. With their sturdy construction and durable materials, these boots offer excellent ankle support and protection. They are ideal for trekkers who explore rough and rocky trails.",
            mediumDescription: "The RuggedPath Hiking Boots are built to withstand challenging terrain. With their sturdy construction and durable materials, these boots offer excellent ankle support and protection.",
            price: 139.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952254/TrekShop/Shoes/6_qvn18y.png'
        },
        {
            id: generateId(),
            name: "WildTrail Running Shoes",
            category: "Shoes",
            description: "Trail running shoes for adventurers.",
            longDescription: "The WildTrail Running Shoes are built for adventurers who seek excitement on the trail. These shoes offer a combination of agility and comfort for your outdoor runs and hikes. With a breathable upper and responsive cushioning, they'll keep you moving confidently.",
            mediumDescription: "The WildTrail Running Shoes are built for adventurers who seek excitement on the trail. These shoes offer a combination of agility and comfort for your outdoor runs and hikes.",
            price: 99.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952253/TrekShop/Shoes/5_n2klho.png'
        },
        {
            id: generateId(),
            name: "TrekKings Waterproof Boots",
            category: "Shoes",
            description: "Waterproof trekking boots.",
            longDescription: "The TrekKings Waterproof Boots are your dependable choice for wet and rugged treks. These boots feature a waterproof membrane to keep your feet dry, and the rugged outsole ensures traction on challenging terrain. They offer excellent ankle support and comfort for long adventures.",
            mediumDescription: "The TrekKings Waterproof Boots are your dependable choice for wet and rugged treks. These boots feature a waterproof membrane to keep your feet dry, and the rugged outsole ensures traction on challenging terrain.",
            price: 159.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952249/TrekShop/Shoes/4_mk5sok.png'
        },
        {
            id: generateId(),
            name: "AdventureLite Hiking Shoes",
            category: "Shoes",
            description: "Lightweight hiking shoes.",
            longDescription: "The AdventureLite Hiking Shoes are designed for hikers who value lightweight and flexibility. These shoes are perfect for day hikes and casual outdoor activities. They feature a breathable mesh upper and a comfortable EVA midsole.",
            mediumDescription: "The AdventureLite Hiking Shoes are designed for hikers who value lightweight and flexibility. These shoes are perfect for day hikes and casual outdoor activities.",
            price: 79.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952246/TrekShop/Shoes/1_mlwfuj.png'
        }
    ]
}

module.exports = products;




app.get("/", (req, res) => {
    res.send(products)
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));