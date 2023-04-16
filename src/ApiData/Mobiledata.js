import React, { createContext, useState } from "react";

export const MobileStore = createContext();

function MobileApi(props) {
  

    const [Mobiledata] = useState([
        {
            id: 1,
            name: "OnePlus 9",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
            price: "₹22,000",
            oPrice: "₹23,900"

        },
        {
            id: 2,
            name: "OnePlus 10 Pro",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/61mIUCd-37L._SL1500_.jpg",
            price: "₹19,500",
            oPrice: "₹21,000"

        },
        {
            id: 3,
            name: "OnePlus 10 R",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/716uVx3Wr5L._AC_SS450_.jpg",
            price: "₹35,000",
            oPrice: "₹38,499"

        },
        {
            id: 4,
            name: "OnePlus Nord 2T",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/617MPEZB5mL._SL1500_.jpg",
            price: "₹16,500",
            oPrice: "₹19,000"

        },
        {
            id: 5,
            name: "OnePlus Nord CE 2",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/619n6kxuGsL._SL1500_.jpg",
            price: "₹23,500",
            oPrice: "₹25,500"

        },
        {
            id: 6,
            name: "Redmi Note 9 Pro",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://i01.appmifile.com/webfile/globalimg/in/cms/A0F36EF9-A32C-FF2F-E2D5-1FE5124589C2.jpg",
            price: "₹12,500",
            oPrice: "₹13,500"
        },
        {
            id: 7,
            name: "Redmi Note 10 Lite",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://i02.appmifile.com/644_operator_in/30/09/2021/71bceaa70d1b789429e32134dc332adb.jpg",
            price: "₹14,500",
            oPrice: "₹16,000"
        },
        {
            id: 8,
            name: "Redmi Note 10 Prime",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/817clKAKcqL._SL1500_.jpg",
            price: "₹16,000",
            oPrice: "₹17,500"
        },
        {
            id: 9,
            name: "Redmi Note 11 Pro",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/717DeSsnXpL._SL1500_.jpg",
            price: "₹17000",
            oPrice: "₹19,500"
        },
        {
            id: 10,
            name: "Redmi Note 11",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_SS450_.jpg",
            price: "₹23500",
            oPrice: "₹25,500"
        },
        {
            id: 11,
            name: "Samsung Galaxy A13 ",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/81i1A1MgXBL._SL1500_.jpg",
            price: "₹14500",
            oPrice: "₹16,499"
        },
        {
            id: 12,
            name: "Samsung Galaxy S20",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/71RxOftVoQL._AC_SS450_.jpg",
            price: "₹20500",
            oPrice: "₹21,000"
        },
        {
            id: 13,
            name: "Asus Zenfone 8",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://dlcdnwebimgs.asus.com/gain/c05b6491-6d2b-48f0-81f0-d268840208d6/",
            price: "₹15500",
            oPrice: "₹17,000"
        },
        {
            id: 14,
            name: "Asus Zenfone 7",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://dlcdnwebimgs.asus.com/gain/aefee30c-d71b-46ce-9c28-5cf6daf80a03/",
            price: "₹15999",
            oPrice: "₹17,499"
        },
        {
            id: 15,
            name: "Google Pixel 4 XL",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/71oTy+incwL._SL1500_.jpg",
            price: "₹16000",
            oPrice: "₹18,000"
        },
        {
            id: 16,
            name: "Google Pixel 5",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_Teaser_Google_Pixel_5.jpg",
            price: "₹17000",
            oPrice: "₹19,500"
        },
         {
            id: 17,
            name: "Ipad Air 5th Gen",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=75/1600_JPG/Tabs/Apple/Apple-IPad-Air-10-9-Inch-WiFi%20-Cellular-64GB-Space-Grey-MYGW2HNA-4th-Generation/Apple-IPad-Air-10-9-Inch-WiFi-Cellular-64GB-Space-Grey-MYGW2HNA-4th-Generation.jpg",
            price: "₹54,900",
            oPrice: "₹56,900"
        },
        {
            id: 18,
            name: "Ipad Air A14",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/71SAHzzQqkL._SY450_.jpg",
            price: "₹65,500",
            oPrice: "₹67,900"
        },
        {
            id: 19,
            name: "Ipad Air 2",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://merchants.infishopper.com/content/images/thumbs/0163509_ipad-air-2-64gb-4g_450.jpeg",
            price: "₹50,500",
            oPrice: "₹60,000"
        },
        {
            id: 20,
            name: "Ipad Air 3rd Gen",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/61pKdiWVerL._AC_SS450_.jpg",
            price: "58,900",
            oPrice: "₹62,900"
        },
        {
            id: 21,
            name: "Ipad 11 Pro",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-11-select-202104_GEO_IN_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617865122000",
            price: "₹60,500",
            oPrice: "₹63,000"
        },
        {
            id: 22,
            name: "Ipad Pro 10",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647446307-ipad-pro-1647446296.png?crop=1xw:1xh;center,top&resize=480%3A%2A",
            price: "₹75,000",
            oPrice: "₹82,499"
        },
        {
            id: 23,
            name: "Ipad Pro M1",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=75/1600_JPG/Tabs/Apple/Apple-IPad-Pro-With-Apple-M1-Chip-11-Inch-WiFi-3rd-Generation/Apple-iPad-Pro-With-Apple-M1-Chip-11-Inch-WiFi-128GB-Space-Grey-MHQR3HN-A-3rd-Generation1.jpg",
            price: "₹1,75,500",
            oPrice: "₹1,83,000"
        },
        {
            id: 24,
            name: "Ipad Pro 10.5 Inch.",
            catagory: "Ipad",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://cdn.alloallo.media/catalog/product/apple/ipad/ipad-pro-10-5-in/ipad-pro-10-5-in-space-gray.jpg",
            price: "₹60000",
            oPrice: "₹67,900"
        },
    ]);
    const [loadData, setLoadData] = useState(4);
    
    
     
    const loadMore = () => {
        setLoadData(loadData + 4);
    };


    return (
        <MobileStore.Provider value={{Mobiledata:Mobiledata.slice(0,loadData), loadMore}
}>
            {props.children}
        </MobileStore.Provider>
    );
}

export default MobileApi;