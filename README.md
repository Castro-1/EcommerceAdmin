# E-commerce

## Fully functional responsive E-commerce website with admin section

The primary goal of this project was to learn the steps and challenges of building an e-commerce website by following a course. The course taught the overall essential structure of the project, but more functionalities were added to deepen the understanding of the learnt concpets and technologies. In order for the project to be successful it had to satisfly the following requirements:

1. Admin Page:
   * The user can add, update and delete products.
   * The user can observe the information of the number orders and revenue at different timestamps.
   * The user can classify the products in different categories, add discounts to them, define a feature product and the shipping price.
   * The user can see detailed information of all the orders and change their state to delivered.
   * The user can add and delete other admin users.
2. Ecommerce Page:
   * The user can observe all the products and important information about them.
   * The user can add and remove items from the cart.
   * The user can add products to a whishlist.
   * The user can see the information and state of their orders.
   * The user can add reviews to products.
   * The user can simulate a checkout using Stripe.
   * The user can cancel orders.
   * The user can save their order information.

## Try it yourself!

* [**Ecommerce**](https://ecommerce-front-jecg.vercel.app/)

![Front](https://github.com/Castro-1/EcommerceFront/assets/82610906/0da8bb21-1c5f-48aa-bed0-efd139e511c3)

* [**Admin**](https://www.canva.com/design/DAF2rwSDba4/do-Y6xN9TY1HozxH7ajR5g/edit?utm_content=DAF2rwSDba4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) (How it looks)

![Admin-section](https://github.com/Castro-1/EcommerceFront/assets/82610906/c479b626-bd6c-4bda-b069-57a07d0ea686)


## How to use this Ecommerce project

The best way to implement this project yourself and understand deeply how this ecommerce works is by following the free course by Coding With Dawid. If you want to do it yourself click [here](https://www.youtube.com/watch?v=hlh1zR2Wjvs&list=LL&index=22&t=17s). I did the complete paid course, you can find it in the description.

If you want to try this project in your machine, these are the steps:

1. Fork EcommerceAdmin:
```
git fork https://github.com/Castro-1/EcommerceAdmin.git
```

2. Install dependencies:
```
npm install
# or
yarn install
```

3. Run EcommerceAdmin:
```
npm run dev
# or
yarn dev
# or
pnpm dev
```

**Important**: Note that in some parts of the code you will need environment variables. For the sake of my project I cannot give them to you, you will have to handle them yourself:
* NEXTAUTH_URL
* SECRET
* MONGODB_URI
* S3_ACCESS_KEY
* S3_SECRET_ACCESS_KEY
* GOOGLE_ID
* GOOGLE_SECRET

Now you have the administrator page on your machine! At this step you should create new products so you can display them on the e-commerce page. Now let's set up the front:

1. Fork EcommerceFront:
```
git fork https://github.com/Castro-1/EcommerceFront.git
```

2. Install dependencies:
```
npm install
# or
yarn install
```

3. Run EcommerceFront:
```
npm run dev
# or
yarn dev
# or
pnpm dev
```

**Important**: Note that in some parts of the code you will need environment variables. For the sake of my project I cannot give them to you, you will have to handle them yourself:
* PUBLIC_URL
* NEXT_PUBLIC_URL
* NEXTAUTH_URL
* SECRET
* MONGODB_URI
* STRIPE_PK
* GOOGLE_FRONT_ID
* GOOGLE_FRONT_SECRET


## Congratulations, You are running the Ecommerce locally!

**PD:** If you find any bug on my code or have a better idea on how to implement it, please tell me, I would love to improve my skills!
