import ContactUs from "../../pages/ContactUs";
import AboutUs from "../../pages/AboutUs";
import Landing from "../../pages/LandingPage";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import ProductDetails from "../../pages/ProductDetails";
import ProductList from "../../pages/ProductList";
import TermsAndCondition from "../../pages/TermsAndCondition";
import { VerificationEmail } from "../../pages/VerificationEmail";
import TrackingPage from "../../pages/TrackingPage";
import Account from "../../pages/Account";
import UserCheckout from "../../pages/UserCheckout";
import OrderConfirmation from "../../pages/OrderConfirmation";

import TopAthletes from "../../pages/topAthletestemp";

const routes = [
  {
    id: "landingPageRoute",
    path: "/",
    component: <Landing />,
  },
  {
    id: "productList",
    path: "/product-list",
    component: <ProductList />,
  },
  {
    id: "verification email",
    path: "/verification-email/:token",
    component: <VerificationEmail />,
  },
  {
    id: "productDetails",
    path: "/product-details",
    component: <ProductDetails />,
  },
  {
    id: "account",
    path: "/account",
    component: <Account />,
    protectedRoute: true,
  },
  {
    id: "topAthletes",
    path: "/top",
    component: <TopAthletes />,
  },
  {
    id: "contactUs",
    path: "/contact-us",
    component: <ContactUs />,
  },
  {
    id: "aboutUs",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    id: "termsandCondition",
    path: "/terms",
    component: <TermsAndCondition />,
  },
  {
    id: "privacyPolicy",
    path: "/privacy-policy",
    component: <PrivacyPolicy />,
  },
  {
    id: "trackingPage",
    path: "/tracking-page",
    component: <TrackingPage />,
  },
  {
    id: "paymentCheckout",
    path: "/checkout",
    component: <UserCheckout />,
  },
  {
    id: "orderConfirmation",
    path: "/confirmed-order",
    component: <OrderConfirmation />,
  },
];

export default routes;
