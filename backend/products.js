const products = {
    Clothes: [
        {
            id: "1bhdt",
            category: "Clothes",
            name: "StormShield Pro",
            description: "Weather-resistant hiking jacket.",
            longDescription: "The StormShield Pro is a top-notch hiking jacket designed to withstand the toughest weather conditions. Made from high-quality materials, this jacket offers excellent protection against rain, wind, and cold temperatures. Its breathable fabric ensures you stay comfortable during extended outdoor adventures. With a range of pockets and adjustable features, it's the ideal choice for trekkers who demand reliability and performance.",
            mediumDescription: "The StormShield Pro is a top-notch hiking jacket designed to withstand the toughest weather conditions. Made from high-quality materials, this jacket offers excellent protection against rain, wind, and cold temperatures.",
            price: 149.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952270/TrekShop/Clothes/5_wptzbn.png'
        },
        {
            id: "2bhdt",
            category: "Clothes",
            name: "RainGuard Lite",
            description: "Lightweight raincoat for trekkers.",
            longDescription: "The RainGuard Lite is the perfect companion for trekkers looking for a lightweight and reliable raincoat. Its compact design makes it easy to carry in your backpack, ensuring you're always prepared for unexpected rain showers. Despite its lightweight nature, it offers excellent protection against rain and wind.",
            mediumDescription: "The RainGuard Lite is the perfect companion for trekkers looking for a lightweight and reliable raincoat. Its compact design makes it easy to carry in your backpack, ensuring you're always prepared for unexpected rain showers.",
            price: 79.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952261/TrekShop/Clothes/9_el1cva.png'
        },
        {
            id: "3bhdt",
            category: "Clothes",
            name: "SummitShield Shell",
            description: "Versatile trekking shell jacket.",
            longDescription: "The SummitShield Shell is a versatile trekking shell jacket that adapts to changing weather conditions. Whether you're facing rain, wind, or a sudden drop in temperature, this jacket has you covered. Its innovative design includes a removable hood, adjustable cuffs, and multiple pockets for storage.",
            mediumDescription: "The SummitShield Shell is a versatile trekking shell jacket that adapts to changing weather conditions. Whether you're facing rain, wind, or a sudden drop in temperature, this jacket has you covered.",
            price: 129.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952261/TrekShop/Clothes/3_mwfuco.png'
        },
        {
            id: "4bhdt",
            category: "Clothes",
            name: "TrekFlex Hiking Shorts",
            description: "Flexible and durable hiking shorts.",
            longDescription: "The TrekFlex Hiking Shorts are designed for maximum comfort and durability on the trail. Their flexible fabric and ergonomic design allow for unrestricted movement, making them ideal for active treks. These shorts are equipped with multiple pockets for your essentials and are made from quick-drying, moisture-wicking material.",
            mediumDescription: "The TrekFlex Hiking Shorts are designed for maximum comfort and durability on the trail. Their flexible fabric and ergonomic design allow for unrestricted movement, making them ideal for active treks.",
            price: 49.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952257/TrekShop/Clothes/6_bqnk3i.png'
        },
        {
            id: "5bhdt",
            category: "Clothes",
            name: "AdventurePro Trekking Pants",
            description: "High-performance trekking shorts.",
            longDescription: "The AdventurePro Trekking Shorts excel in every aspect. Their reinforced stitching and durable construction are designed to withstand the rigors of the trail. Whether you're bushwhacking through dense undergrowth or facing rocky terrain, these shorts won't let you down. The water-resistant fabric ensures that you stay dry in wet conditions, and the adjustable waistband allows you to customize the fit to your liking.",
            mediumDescription: "The AdventurePro Trekking Shorts excel in every aspect. Their reinforced stitching and durable construction are designed to withstand the rigors of the trail. Whether you're bushwhacking through dense undergrowth or facing rocky terrain, these shorts won't let you down.",
            price: 69.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952251/TrekShop/Clothes/10_r42zhb.png'
        },
        {
            id: "6bhdt",
            category: "Clothes",
            name: "TrailBlaze Convertible Pants",
            description: "Convertible trekking pants.",
            longDescription: "The TrailBlaze Convertible Pants are a versatile addition to any trekker's wardrobe. These pants offer the convenience of both full-length and shorts with their zip-off legs. Made from lightweight, moisture-wicking fabric, they keep you comfortable in various weather conditions. The pants also feature UPF sun protection and multiple pockets for storage.",
            mediumDescription: "The TrailBlaze Convertible Pants are a versatile addition to any trekker's wardrobe. These pants offer the convenience of both full-length and shorts with their zip-off legs.",
            price: 89.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952242/TrekShop/Clothes/8_y1zf6w.png'
        },
        {
            id: "7bhdt",
            category: "Clothes",
            name: "AlpineGuard Waterproof Pants",
            description: "Waterproof hiking pants.",
            longDescription: "The AlpineGuard Waterproof Pants are a must-have for trekkers who encounter wet and challenging terrain. These pants offer complete waterproof protection to keep you dry even in heavy rain. Their durable construction includes reinforced knees and seat for added durability. With adjustable features and ventilation options, these pants ensure comfort and performance during your trekking adventures.",
            mediumDescription: "The AlpineGuard Waterproof Pants are a must-have for trekkers who encounter wet and challenging terrain. These pants offer complete waterproof protection to keep you dry even in heavy rain.",
            price: 119.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952245/TrekShop/Clothes/7_aeslxh.png'
        },
        {
            id: "8bhdt",
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
            id: "9bhdt",
            name: "TrailBlaze Hiking Boots",
            category: "Shoes",
            description: "Durable hiking boots.",
            longDescription: "The TrailBlaze Hiking Boots are built for durability and performance on the trail. These boots feature a rugged design with reinforced toe caps and ankle support. The waterproof and breathable membrane keeps your feet dry in any weather.",
            mediumDescription: "The TrailBlaze Hiking Boots are built for durability and performance on the trail. These boots feature a rugged design with reinforced toe caps and ankle support.",
            price: 149.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952260/TrekShop/Shoes/2_vos99l.png'
        },
        {
            id: "10bhdt",
            category: "Shoes",
            name: "SummitExplorer Trekking Shoes",
            description: "Versatile trekking shoes.",
            longDescription: "The SummitExplorer Trekking Shoes are versatile and suitable for a wide range of outdoor activities. These shoes provide a comfortable fit and excellent support for your feet. They are equipped with a durable outsole that offers great traction.",
            mediumDescription: "The SummitExplorer Trekking Shoes are versatile and suitable for a wide range of outdoor activities. These shoes provide a comfortable fit and excellent support for your feet.",
            price: 129.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952243/TrekShop/Shoes/8_omknis.png'
        },
        {
            id: "11bhdt",
            name: "SummitExplorer Trekking Shoes",
            category: "Shoes",
            description: "Versatile trekking shoes.",
            longDescription: "The SummitExplorer Trekking Shoes are versatile and suitable for a wide range of outdoor activities. These shoes provide a comfortable fit and excellent support for your feet. They are equipped with a durable outsole that offers great traction.",
            mediumDescription: "The SummitExplorer Trekking Shoes are versatile and suitable for a wide range of outdoor activities. These shoes provide a comfortable fit and excellent support for your feet.",
            price: 129.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952259/TrekShop/Shoes/10_cr0tjz.png'
        },
        {
            id: "12bhdt",
            name: "WildVenture Trail Runners",
            category: "Shoes",
            description: "Trail running shoes.",
            longDescription: "The WildVenture Trail Runners are designed for those who prefer fast-paced outdoor activities. These lightweight and breathable shoes are perfect for trail running and fast hikes. They feature a responsive cushioning system and a grippy outsole for stability.",
            mediumDescription: "The WildVenture Trail Runners are designed for those who prefer fast-paced outdoor activities. These lightweight and breathable shoes are perfect for trail running and fast hikes.",
            price: 89.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952256/TrekShop/Shoes/3_lhkspu.png'
        },
        {
            id: "13bhdt",
            name: "RuggedPath Hiking Boots",
            category: "Shoes",
            description: "Sturdy hiking boots.",
            longDescription: "The RuggedPath Hiking Boots are built to withstand challenging terrain. With their sturdy construction and durable materials, these boots offer excellent ankle support and protection. They are ideal for trekkers who explore rough and rocky trails.",
            mediumDescription: "The RuggedPath Hiking Boots are built to withstand challenging terrain. With their sturdy construction and durable materials, these boots offer excellent ankle support and protection.",
            price: 139.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952254/TrekShop/Shoes/6_qvn18y.png'
        },
        {
            id: "14bhdt",
            name: "WildTrail Running Shoes",
            category: "Shoes",
            description: "Trail running shoes for adventurers.",
            longDescription: "The WildTrail Running Shoes are built for adventurers who seek excitement on the trail. These shoes offer a combination of agility and comfort for your outdoor runs and hikes. With a breathable upper and responsive cushioning, they'll keep you moving confidently.",
            mediumDescription: "The WildTrail Running Shoes are built for adventurers who seek excitement on the trail. These shoes offer a combination of agility and comfort for your outdoor runs and hikes.",
            price: 99.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952253/TrekShop/Shoes/5_n2klho.png'
        },
        {
            id: "15bhdt",
            name: "TrekKings Waterproof Boots",
            category: "Shoes",
            description: "Waterproof trekking boots.",
            longDescription: "The TrekKings Waterproof Boots are your dependable choice for wet and rugged treks. These boots feature a waterproof membrane to keep your feet dry, and the rugged outsole ensures traction on challenging terrain. They offer excellent ankle support and comfort for long adventures.",
            mediumDescription: "The TrekKings Waterproof Boots are your dependable choice for wet and rugged treks. These boots feature a waterproof membrane to keep your feet dry, and the rugged outsole ensures traction on challenging terrain.",
            price: 159.99,
            image: 'https://res.cloudinary.com/dvthntenm/image/upload/v1696952249/TrekShop/Shoes/4_mk5sok.png'
        },
        {
            id: "16bhdt",
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
