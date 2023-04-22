export function Data(status) {
    let data = [];
    switch (status) {
      case "products":
        data  = [
          {
            name : "Easy Polo Black Edition",
            image: "images/home/product1.jpg",
            price: "$56",
          },
          {
            name: "Easy Polo Black Edition",
            image: "images/home/product2.jpg",
            price: "$56",
          },
          {
            name: "Easy Polo Black Edition",
            image: "images/home/product3.jpg",
            price: "$56",
          },
          {
            name: "Easy Polo Black Edition",
            image: "images/home/product4.jpg",
            price: "$56",
          },
          {
            name: "Easy Polo Black Edition",
            image: "images/home/product5.jpg",
            price: "$56",
          },
          {
            name: "Easy Polo Black Edition",
            image: "images/home/product6.jpg",
            price: "$56",
          },
        ];
        break;
      case "recommend":
        data = [
          {
            name: "Easy Polo Black Edition",
            image: "images/home/recommend1.jpg",
            price: "$56",
          },
          {
            name: "Easy Polo Black Edition",
            image: "images/home/recommend2.jpg",
            price: "$56",
          },
          {
            name: "Easy Polo Black Edition",
            image: "images/home/recommend3.jpg",
            price: "$56",
          }
        ];
        break;
      case "category":
        data = [
          {
            name: "Easy Polo Black Edition",
            image: "images/home/gallery1.jpg",
            price: "$56",
          },
          {
            name: "Easy Polo Black Edition",
            image: "images/home/gallery2.jpg",
            price: "$56",
          },
          {
            name: "Easy Polo Black Edition",
            image: "images/home/gallery3.jpg",
            price: "$56",
          },
          {
            name: "Easy Polo Black Edition",
            image: "images/home/gallery4.jpg",
            price: "$56",
          },
        ];
        break;
      default:
        break;
    }
    return data;
  }