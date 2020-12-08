const products = [
    {
      id: 1,
      name: "Brown Shirt",
      description: "Brown T-Shirt for Women",
      price: 16.99,
      gender: "women",
      type: "shirt",
      img: "https://image.ibb.co/kOhL6k/img1.jpg",
      inCart: false,
      category: "clothes"
    },
    {
      id: 2,
      name: "Women White Shirt",
      description: "Light  Shirt for Women",
      price: 4.99,
      gender: "women",
      type: "shirt",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVuGnM7YKW1euIOWO_iBtoykKgZQpsRmSsA&usqp=CAU",
      inCart: false,
      category: "clothes"
    },
    {
      id: 3,
      name: "Women Grey Shirt",
      description: "Grey Shirt for Women",
      price: 14.99,
      gender: "women",
      type: "shirt",
      img: "https://image.ibb.co/n6iMCQ/img3.jpg",
      inCart: false,
      category: "clothes"
    },
    {
      id: 4,
      name: "Warm Shirt Women",
      description: "Woolen Hoodie Women",
      price: 20.99,
      gender: "women",
      type: "shirt",
      img: "https://image.ibb.co/dVfORk/img4.jpg",
      inCart: false,
      category: "clothes"
    },
    {
      id: 5,
      name: "Women Grey Shirt",
      description: " Grey Shirt for Women",
      price: 4.99,
      gender: "women",
      type: "shirt",
      img: "https://image.ibb.co/jpMxmk/img5.jpg",
      inCart: false,
      category: "clothes"
    },
    {
      id: 6,
      name: "Women Brown Shirt",
      description: "Brown Blouse for Women",
      price: 19.99,
      gender: "women",
      type: "blouse",
      img: "https://image.ibb.co/mJppz5/img6.jpg",
      inCart: false,
      category: "clothes"
    },
    {
      id: 7,
      name: " Grey Shirt Women",
      description: "Dark Grey Shirt for Women",
      price: 6.25,
      gender: "women",
      type: "shirt",
      img: "https://image.ibb.co/eZiSmk/img7.jpg",
      inCart: false,
      category: "clothes"
    },
    {
      id: 8,
      name: "White Shirt Women",
      description: "White Shirt for Women",
      price: 14.99,
      gender: "women",
      type: "shirt",
      img: "https://image.ibb.co/dyCysQ/img8.jpg",
      inCart: false,
      category: "clothes"
    },
    {
      id: 9,
      name: "Black Shirt Women",
      description: "Black Shirt for Women",
      price: 20.99,
      gender: "women",
      type: "shirt",
      img: "https://image.ibb.co/eOYre5/img10.jpg",
      inCart: false,
      category: "clothes"
    },
    {
      id: 10,
      name: "No Shoulder Hoodie",
      description: "Hoodie for Women",
      price: 4.99,
      gender: "women",
      type: "shirt",
      img: "https://image.ibb.co/f6gcK5/img9.jpg",
      inCart: false,
      category: "clothes"
    },
    {
      id: 14,
      name: "Man Grey Tanktop",
      description: "Grey Tanktop for Men",
      price: 14.99,
      gender: "men",
      type: "shirt",
      img: "http://media.istockphoto.com/photos/portrait-of-young-man-wearing-tshirt-picture-id465207699?k=6&m=465207699&s=612x612&w=0&h=wSacC0bmcrekig1DW8lOwH7y3X0e4R9266-TuivVQJA=",
      inCart: false,
      category: "clothes"
    },
    {
      id: 15,
      name: "Man White Shirt",
      description: "White Shirt for Men",
      price: 20.99,
      gender: "men",
      type: "shirt",
      img: "http://media.istockphoto.com/photos/young-man-wearing-a-white-shirt-picture-id465331977?k=6&m=465331977&s=612x612&w=0&h=-K3c5eE2dZGmg6d5BrBfxOvcHRP7PwHrylyjuEVjbZo=",
      inCart: false,
      category: "clothes"
    },
    {
      id: 16,
      name: "Man Brown Shirt",
      description: "Brown Shirt for Men",
      price: 13.99,
      gender: "men",
      type: "shirt",
      img: "http://media.istockphoto.com/photos/young-man-looks-to-the-side-picture-id184616842?k=6&m=184616842&s=612x612&w=0&h=SmtsffRByKDH4_HtzGY8bWvHgH8o_4epWVPogvfJXnk=",
      inCart: false,
      category: "clothes"
    },
    
    {
      id: 18,
      name: "Black Shirt Men",
      description: "Black Shirt for Men",
      price: 9.99,
      gender: "men",
      type: "shirt",
      img: "http://media.istockphoto.com/photos/smiling-man-in-a-black-t-shirt-picture-id520883622?k=6&m=520883622&s=612x612&w=0&h=XuxfQE0EOo_uWqA8SzNJvZ9Vn-sKR_cT4J9GRIudE4U=",
      inCart: false,
      category: "clothes"
    },
    {
      id: 19,
      name: "Man Black Tie",
      description: "Black Tie for Men",
      price: 15.99,
      gender: "men",
      type: "tie",
      img: "https://www.bc-collection.eu/sites/default/files/styles/product_full/public/product_images/SMP21_I_BC_01_0.jpg?itok=11X9YhxH",
      inCart: false,
      category: "accessories"
    },
    
    {
      id: 20,
      name: "Man Black Tie",
      description: "Black Tie for Men",
      price: 15.99,
      gender: "men",
      type: "tie",
      img: "http://static.becomegorgeous.com/img/articles/what_does_your_mans_tie_tell_about_his_personality_.jpg",
      inCart: false,
      category: "accessories"
    },
    {
      id: 21,
      name: "Man Black Shirt ",
      description: "Black Shirt for Men",
      price: 19.99,
      gender: "men",
      type: "shirt",
      img: "https://www.bigw.com.au/medias/sys_master/images/images/hbe/hd3/12939079221278.jpg",
      inCart: false,
      category: "clothes"
    },
    {
      id: 22,
      name: " Man White Shirt",
      description: "White Shirt for Men",
      price: 17.79,
      gender: "men",
      type: "shirt",
      img: "http://media.istockphoto.com/photos/young-man-wearing-a-white-shirt-picture-id465331977?k=6&m=465331977&s=612x612&w=0&h=-K3c5eE2dZGmg6d5BrBfxOvcHRP7PwHrylyjuEVjbZo=",
      inCart: false,
      category: "clothes"
    },
    {
      id: 23,
      name: "Man Black Sweater",
      description: "Black Sweater for Men",
      price: 43.79,
      gender: "men",
      type: "shirt",
      img: "https://chkokkobanners.azureedge.net/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/-/1-min_1.jpg",
      inCart: false,
      category: "clothes"
    },
    {
      id: 24,
      name: "Man White Shirt",
      description: "White Shirt for Men",
      price: 30.59,
      gender: "men",
      type: "shirt",
      img: "https://cdn.shopify.com/s/files/1/2028/4467/products/sh4_white_back_530x@2x.jpg?v=1569476719",
      inCart: false,
      category: "clothes"
    }
  ];
  
  export default products;

  