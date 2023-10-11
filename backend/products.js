const { nanoid } = require("nanoid");

const generateId = () => nanoid();
const products = {
    accessories: [
        {
            id: generateId(),
            name: "Carabiner",
            descriptionShort: "Versatile carabiner.",
            descriptionLong: "The Carabiner is an essential tool for outdoor enthusiasts. This versatile carabiner can be used for a wide range of purposes, including securing gear, attaching items to your backpack, and more. Its durable construction ensures reliable performance in various outdoor conditions.",
            price: 39.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952262/TrekShop/Accessories/5_hb6huo.png'
        },
        {
            id: generateId(),
            name: "Trekking Poles",
            descriptionShort: "Sturdy trekking poles.",
            descriptionLong: "The Trekking Poles provide stability and support during your hikes and treks. These sturdy poles are adjustable to suit your height and terrain. They help reduce strain on your knees and improve balance on uneven trails. With comfortable grips and durable materials, they are a valuable addition to your outdoor gear.",
            price: 15.49,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952257/TrekShop/Accessories/1_nsoqic.png'
        },
        {
            id: generateId(),
            name: "Carabiner",
            descriptionShort: "Versatile carabiner.",
            descriptionLong: "The Carabiner is an essential tool for outdoor enthusiasts. This versatile carabiner can be used for a wide range of purposes, including securing gear, attaching items to your backpack, and more. Its durable construction ensures reliable performance in various outdoor conditions.",
            price: 8.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952257/TrekShop/Accessories/1_nsoqic.png'
        },
        {
            id: generateId(),
            name: "Trekking Hat",
            descriptionShort: "Sun protection trekking hat.",
            descriptionLong: "The Trekking Hat provides essential sun protection during your outdoor adventures. This wide-brimmed hat shields your face and neck from harmful UV rays. It's designed for breathability and comfort, making it ideal for hot and sunny treks. Stay cool and protected with this trekking hat.",
            price: 12.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952256/TrekShop/Accessories/7_ndhisx.png'
        },
        {
            id: generateId(),
            name: "Sleeping Bag",
            descriptionShort: "Compact sleeping bag.",
            descriptionLong: "The Sleeping Bag is designed for a comfortable night's sleep during your camping trips. This compact sleeping bag is lightweight and easy to carry in your backpack. It provides excellent insulation and warmth, ensuring you stay cozy even in chilly nights. Get a good night's rest with this reliable sleeping bag.",
            price: 19.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952255/TrekShop/Accessories/4_qk9cgb.png'
        },
        {
            id: generateId(),
            name: "Headlamp",
            descriptionShort: "Hands-free headlamp.",
            descriptionLong: "The Headlamp is a versatile hands-free lighting solution for your outdoor adventures. This headlamp is designed for comfort and ease of use. It offers multiple lighting modes, including a bright beam for hiking at night. Whether you're setting up camp or night hiking, this headlamp is an essential accessory.",
            price: 7.49,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952247/TrekShop/Accessories/2_kksyw4.png'
        },
        {
            id: generateId(),
            name: "Hydration Reservoir",
            descriptionShort: "Convenient hydration reservoir.",
            descriptionLong: "The Hydration Reservoir is a must-have for staying hydrated on the trail. This reservoir can be easily integrated into your backpack, providing a convenient way to drink while on the move. It has a large capacity and a leak-proof design. Stay refreshed during your treks with this hydration reservoir.",
            price: 24.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952244/TrekShop/Accessories/8_xy5qmt.png'
        },
        {
            id: generateId(),
            name: "Sleeping Bag",
            descriptionShort: "Compact sleeping bag.",
            descriptionLong: "The Sleeping Bag is designed for a comfortable night's sleep during your camping trips. This compact sleeping bag is lightweight and easy to carry in your backpack. It provides excellent insulation and warmth, ensuring you stay cozy even in chilly nights. Get a good night's rest with this reliable sleeping bag.",
            price: 14.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952244/TrekShop/Accessories/6_y8tmn6.png'
        },
        {
            id: generateId(),
            name: "Carabiner",
            descriptionShort: "Versatile carabiner.",
            descriptionLong: "The Carabiner is an essential tool for outdoor enthusiasts. This versatile carabiner can be used for a wide range of purposes, including securing gear, attaching items to your backpack, and more. Its durable construction ensures reliable performance in various outdoor conditions.",
            price: 11.49,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952243/TrekShop/Accessories/10_frs0zm.png'
        },
        {
            id: generateId(),
            name: "Sleeping Bag",
            descriptionShort: "Compact sleeping bag.",
            descriptionLong: "The Sleeping Bag is designed for a comfortable night's sleep during your camping trips. This compact sleeping bag is lightweight and easy to carry in your backpack. It provides excellent insulation and warmth, ensuring you stay cozy even in chilly nights. Get a good night's rest with this reliable sleeping bag.",
            price: 9.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696954282/TrekShop/Accessories/3_xfke21.png'
        },
    ],

    backpacks: [
        {
            id: generateId(),
            name: "TrailSeeker 35",
            capacity: 35,
            description: "Lightweight 35L backpack.",
            longDescription: 'The TrailSeeker 35 is the perfect choice for trekkers who value lightweight design and functionality. With a 35-liter capacity, it provides ample space for your essentials. This backpack features multiple pockets, including a dedicated hydration reservoir sleeve. The adjustable shoulder straps ensure a comfortable fit for long hikes. Embark on your adventures with this reliable backpack. Prices start at 40.50 euros.',
            price: 40.50,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952268/TrekShop/BackPacks/4_fchr9b.png'
        },
        {
            id: generateId(),
            name: "SummitPro Trekker 50",
            capacity: 50,
            description: "Durable 50L trekking companion.",
            longDescription: 'The SummitPro Trekker 50 is built to withstand the rigors of outdoor exploration. With a 50-liter capacity, it offers spacious storage for your gear. This backpack is equipped with a reinforced frame and durable materials to handle tough conditions. It features multiple pockets, including a dedicated water bottle pocket. The adjustable hip belt ensures all-day comfort on extended adventures. Prices start at 45.25 euros.',
            price: 45.25,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952267/TrekShop/BackPacks/9_fnxds8.png'
        },
        {
            id: generateId(),
            name: "WildVenture Explorer 70",
            capacity: 70,
            description: "Spacious 70L trekking backpack.",
            longDescription: 'The WildVenture Explorer 70 is designed for trekkers who need extra storage space. With a 70-liter capacity, it offers room for all your equipment. This backpack features a plethora of pockets, including a dedicated hydration reservoir sleeve. The adjustable shoulder straps ensure a comfortable fit for extended hikes. Embark on your explorations with this spacious and reliable backpack. Prices start at 8.99 euros.',
            price: 8.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952261/TrekShop/BackPacks/3_olan67.png'
        },
        {
            id: generateId(),
            name: "ExpeditionMaster Pro 55",
            capacity: 55,
            description: "Professional-grade 55L backpack.",
            longDescription: 'The ExpeditionMaster Pro 55 is the choice of professional trekkers who demand top-notch performance. With a 55-liter capacity, it offers ample space for your gear. This backpack is engineered with advanced materials and a reinforced frame for durability. It features numerous pockets, including a dedicated water bottle pocket. The adjustable hip belt ensures all-day comfort on challenging treks. Prices start at 12.99 euros.',
            price: 12.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952260/TrekShop/BackPacks/6_t2qrr7.png'
        },
        {
            id: generateId(),
            name: "AdventureLite Trekking 40",
            capacity: 40,
            description: "Versatile 40L trekking backpack.",
            longDescription: 'The AdventureLite Trekking 40 is a versatile companion for trekkers exploring a variety of terrains. With a 40-liter capacity, it offers ample space for your essentials. This backpack features multiple pockets, including a dedicated hydration reservoir sleeve. The adjustable shoulder straps ensure a comfortable fit for different hikes. Set off on your adventures with this adaptable backpack. Prices start at 19.99 euros.',
            price: 19.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952255/TrekShop/BackPacks/2_hrgmhd.png'
        },
        {
            id: generateId(),
            name: "LiteTrail Trekker 30",
            capacity: 30,
            description: "Lightweight 30L trekking companion.",
            longDescription: 'The LiteTrail Trekker 30 is the ideal choice for trekkers who prefer a lightweight and compact design. With a 30-liter capacity, it offers just enough space for your essentials. This backpack features multiple pockets, including a dedicated hydration reservoir sleeve. The adjustable shoulder straps ensure a comfortable fit for shorter hikes. Embark on your outdoor journeys with this nimble backpack. Prices start at 7.49 euros.',
            price: 7.49,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952242/TrekShop/BackPacks/8_slwh8c.png'
        },
        {
            id: generateId(),
            name: "SummitHiker Trekking 45",
            capacity: 45,
            description: "Versatile 45L trekking backpack.",
            longDescription: 'The SummitHiker Trekking 45 is versatile and suitable for a wide range of outdoor activities. With a 45-liter capacity, it provides room for your gear. This backpack features multiple pockets, including a dedicated water bottle pocket. The adjustable hip belt ensures all-day comfort. Whether youre hiking, trekking, or exploring, this backpack will be your reliable companion.Prices start at 24.99 euros.',
            price: 24.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952248/TrekShop/BackPacks/1_f4ginw.png'
        },
        {
            id: generateId(),
            name: "ExplorerLite Trekking 35",
            capacity: 35,
            description: "Lightweight 35L trekking backpack.",
            longDescription: 'The ExplorerLite Trekking 35 is designed for trekkers who value lightweight and agility. With a 35-liter capacity, it provides ample space for your essentials. This backpack features multiple pockets, including a dedicated hydration reservoir sleeve. The adjustable shoulder straps ensure a comfortable fit for your outdoor adventures. Prices start at 14.99 euros.',
            price: 14.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952248/TrekShop/BackPacks/7_z3wq9b.png'
        },
        {
            id: generateId(),
            name: "RapidTrail Trekking 50",
            capacity: 50,
            description: "Versatile 50L trekking companion.",
            longDescription: 'The RapidTrail Trekking 50 is versatile and designed for various outdoor environments. With a 50-liter capacity, it offers room for your gear. This backpack features multiple pockets, including a dedicated hydration reservoir sleeve. The adjustable shoulder straps ensure a comfortable fit for different hikes. Explore the great outdoors with confidence in this adaptable backpack. Prices start at 11.49 euros.',
            price: 11.49,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952242/TrekShop/BackPacks/8_slwh8c.png'
        },
        {
            id: generateId(),
            name: "LightTrail Trekker 40",
            capacity: 40,
            description: "Lightweight 40L trekking backpack.",
            longDescription: 'The LightTrail Trekker 40 is perfect for trekkers who prioritize a lightweight and compact design. With a 40-liter capacity, it offers just enough space for your essentials. This backpack features multiple pockets, including a dedicated hydration reservoir sleeve. The adjustable shoulder straps ensure a comfortable fit for shorter hikes. Embark on your outdoor journeys with this nimble backpack. Prices start at 9.99 euros.',
            price: 9.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952242/TrekShop/BackPacks/8_slwh8c.png'
        },
    ],

    clothes: [
        {
            id: generateId(),
            name: "StormShield Pro",
            descriptionShort: "Weather-resistant hiking jacket.",
            descriptionLong: "The StormShield Pro is a top-notch hiking jacket designed to withstand the toughest weather conditions. Made from high-quality materials, this jacket offers excellent protection against rain, wind, and cold temperatures. Its breathable fabric ensures you stay comfortable during extended outdoor adventures. With a range of pockets and adjustable features, it's the ideal choice for trekkers who demand reliability and performance.",
            price: 149.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952270/TrekShop/Clothes/5_wptzbn.png'
        },
        {
            id: generateId(),
            name: "RainGuard Lite",
            descriptionShort: "Lightweight raincoat for trekkers.",
            descriptionLong: "The RainGuard Lite is the perfect companion for trekkers looking for a lightweight and reliable raincoat. Its compact design makes it easy to carry in your backpack, ensuring you're always prepared for unexpected rain showers. Despite its lightweight nature, it offers excellent protection against rain and wind. The jacket features taped seams and waterproof zippers to keep you dry and comfortable on the trail.",
            price: 79.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952261/TrekShop/Clothes/9_el1cva.png'
        },
        {
            id: generateId(),
            name: "SummitShield Shell",
            descriptionShort: "Versatile trekking shell jacket.",
            descriptionLong: "The SummitShield Shell is a versatile trekking shell jacket that adapts to changing weather conditions. Whether you're facing rain, wind, or a sudden drop in temperature, this jacket has you covered. Its innovative design includes a removable hood, adjustable cuffs, and multiple pockets for storage. The breathable and waterproof fabric ensures you can trek in comfort and style.",
            price: 129.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952261/TrekShop/Clothes/3_mwfuco.png'
        },
        {
            id: generateId(),
            name: "TrekFlex Hiking Shorts",
            descriptionShort: "Flexible and durable hiking shorts.",
            descriptionLong: "The TrekFlex Hiking Shorts are designed for maximum comfort and durability on the trail. Their flexible fabric and ergonomic design allow for unrestricted movement, making them ideal for active treks. These shorts are equipped with multiple pockets for your essentials and are made from quick-drying, moisture-wicking material. With their rugged construction, they can withstand the rigors of trekking in various terrains.",
            price: 49.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952257/TrekShop/Clothes/6_bqnk3i.png'
        },
        {
            id: generateId(),
            name: "AdventurePro Trekking Pants",
            descriptionShort: "High-performance trekking shorts.",
            descriptionLong: "The AdventurePro Trekking Shorts are the go-to choice for trekkers seeking high-performance gear. These shorts are designed to provide exceptional comfort and functionality in challenging outdoor environments. They feature reinforced stitching, water-resistant fabric, and a variety of pockets for your gear. The adjustable waistband ensures a perfect fit, while the durable construction guarantees they'll endure even the toughest treks.",
            price: 69.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952251/TrekShop/Clothes/10_r42zhb.png'
        },
        {
            id: generateId(),
            name: "TrailBlaze Convertible Pants",
            descriptionShort: "Convertible trekking pants.",
            descriptionLong: "The TrailBlaze Convertible Pants are a versatile addition to any trekker's wardrobe. These pants offer the convenience of both full-length and shorts with their zip-off legs. Made from lightweight, moisture-wicking fabric, they keep you comfortable in various weather conditions. The pants also feature UPF sun protection and multiple pockets for storage. Whether you're hiking through forests or deserts, these pants are up to the challenge.",
            price: 89.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952242/TrekShop/Clothes/8_y1zf6w.png'
        },
        {
            id: generateId(),
            name: "AlpineGuard Waterproof Pants",
            descriptionShort: "Waterproof hiking pants.",
            descriptionLong: "The AlpineGuard Waterproof Pants are a must-have for trekkers who encounter wet and challenging terrain. These pants offer complete waterproof protection to keep you dry even in heavy rain. Their durable construction includes reinforced knees and seat for added durability. With adjustable features and ventilation options, these pants ensure comfort and performance during your trekking adventures.",
            price: 119.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952245/TrekShop/Clothes/7_aeslxh.png'
        },
        {
            id: generateId(),
            name: "EcoTrail Trekking Jacket",
            descriptionShort: "Sustainable trekking jacket.",
            descriptionLong: "The EcoTrail Trekking Jacket is designed for environmentally-conscious trekkers. Made from recycled materials, this jacket not only reduces waste but also offers outstanding performance. It is breathable, moisture-wicking, and quick-drying to keep you comfortable on the trail. With multiple pockets and a comfortable fit, it is a sustainable choice for eco-friendly adventurers.",
            price: 99.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952248/TrekShop/Clothes/4_qiuhqn.png'
        }
    ],

    shoes: [
        {
            id: generateId(),
            name: "TrailBlaze Hiking Boots",
            descriptionShort: "Durable hiking boots.",
            descriptionLong: "The TrailBlaze Hiking Boots are built for durability and performance on the trail. These boots feature a rugged design with reinforced toe caps and ankle support. The waterproof and breathable membrane keeps your feet dry in any weather. With a comfortable fit and excellent traction, these boots are ready for your outdoor adventures.",
            price: 149.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952260/TrekShop/Shoes/2_vos99l.png'
        },
        {
            id: generateId(),
            name: "SummitExplorer Trekking Shoes",
            descriptionShort: "Versatile trekking shoes.",
            descriptionLong: "The SummitExplorer Trekking Shoes are versatile and suitable for a wide range of outdoor activities. These shoes provide a comfortable fit and excellent support for your feet. They are equipped with a durable outsole that offers great traction. Whether you're hiking, trekking, or exploring, these shoes will keep your feet happy.",
            price: 129.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952259/TrekShop/Shoes/10_cr0tjz.png'
        },
        {
            id: generateId(),
            name: "WildVenture Trail Runners",
            descriptionShort: "Trail running shoes.",
            descriptionLong: "The WildVenture Trail Runners are designed for those who prefer fast-paced outdoor activities. These lightweight and breathable shoes are perfect for trail running and fast hikes. They feature a responsive cushioning system and a grippy outsole for stability. Enjoy the thrill of the trail with these trail runners.",
            price: 89.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952257/TrekShop/Shoes/7_ox0mfe.png'
        },
        {
            id: generateId(),
            name: "ExplorerPro Waterproof Boots",
            descriptionShort: "Waterproof trekking boots.",
            descriptionLong: "The ExplorerPro Waterproof Boots are your go-to choice for wet and challenging terrain. These boots feature a waterproof membrane that keeps your feet dry in rainy conditions. They offer excellent ankle support and stability. With a rugged design and durable materials, these boots are ready for your next adventure.",
            price: 159.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952256/TrekShop/Shoes/3_lhkspu.png'
        },
        {
            id: generateId(),
            name: "TrekTech All-Terrain Shoes",
            descriptionShort: "All-terrain trekking shoes.",
            descriptionLong: "The TrekTech All-Terrain Shoes are versatile and designed for various outdoor environments. These shoes feature a sturdy outsole that provides excellent traction on different terrains. They offer a comfortable fit and are suitable for hiking, trekking, and other outdoor activities. Explore the great outdoors with confidence in these shoes.",
            price: 119.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952254/TrekShop/Shoes/6_qvn18y.png'
        },
        {
            id: generateId(),
            name: "AdventureSeeker Hiking Boots",
            descriptionShort: "Classic hiking boots.",
            descriptionLong: "The AdventureSeeker Hiking Boots are classic and reliable for all your hiking adventures. These boots feature a traditional design with durable materials. They provide ankle support and protection against rough terrain. With a comfortable fit and great value, these boots are a timeless choice for outdoor enthusiasts.",
            price: 109.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952253/TrekShop/Shoes/5_n2klho.png'
        },
        {
            id: generateId(),
            name: "UltraLight Trail Shoes",
            descriptionShort: "Lightweight trail shoes.",
            descriptionLong: "The UltraLight Trail Shoes are designed for trekkers who value lightweight and agility. These shoes are incredibly light and allow for fast and nimble movement on the trail. They feature a breathable upper and a flexible sole for natural foot movement. Whether you're on a day hike or a longer trek, these shoes won't hold you back.",
            price: 99.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952249/TrekShop/Shoes/4_mk5sok.png'
        },
        {
            id: generateId(),
            name: "MountainMaster Expedition Boots",
            descriptionShort: "Expedition-grade trekking boots.",
            descriptionLong: "The MountainMaster Expedition Boots are built to handle extreme conditions and high-altitude treks. These boots feature advanced insulation and waterproofing technologies to keep your feet warm and dry in harsh environments. They offer maximum support and protection for your feet. When you're heading into challenging terrain, trust these boots to get you there and back safely.",
            price: 199.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952246/TrekShop/Shoes/1_mlwfuj.png'
        },
        {
            id: generateId(),
            name: "EcoTrail Sustainable Shoes",
            descriptionShort: "Sustainable trekking shoes.",
            descriptionLong: "The EcoTrail Sustainable Shoes are designed for eco-conscious trekkers who value sustainability. These shoes are made from recycled materials and feature eco-friendly manufacturing processes. They offer a comfortable fit and reliable performance. Choose these shoes to reduce your environmental footprint while enjoying the great outdoors.",
            price: 109.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952244/TrekShop/Shoes/9_k4m7qc.png'
        }
    ]

}

module.exports = products;


